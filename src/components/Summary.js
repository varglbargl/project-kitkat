import { View, Button, Pressable, Text, StyleSheet } from 'react-native';
import { schedule } from 'initFirebase';
import { useState } from 'react';
import { getDoc, getDocs, query, where, orderBy } from 'firebase/firestore';

import CardHeader from 'components/CardHeader';

import { cards } from 'styles';

let gotDefaultTasks = false;

export default function Summary() {
  const [currentTasks, setTasks] = useState([]);
  const [expandedTask, setExpandedTask] = useState(null);

  const getSchedule = async () => {
    const q = query(schedule, where('deadline', '>', (new Date())), orderBy('deadline'));
    const docs = await getDocs(q);
    const promiseList = [];

    docs.forEach(entry => {
      const entryData = entry.data();
      const promise = getDoc(entryData.task);

      promiseList.push(promise);
    });

    const taskList = (await Promise.all(promiseList)).map(task => {return task.data()});

    gotDefaultTasks = true;

    return taskList;
  };

  const refreshSchedule = () => {
    if (gotDefaultTasks) {
      gotDefaultTasks = false;
      setTasks([]);
    }

    getSchedule()
      .then(setTasks)
      .catch(err => {
        console.error(err.message);
      });
  };

  if (!gotDefaultTasks) refreshSchedule();

  const expandTask = (index) => {
    if (expandedTask === index) {
      setExpandedTask(null);
    } else {
      setExpandedTask(index);
    }
  }

  return (
    <View style={ styles.summaryContainer }>
      { !gotDefaultTasks && <Text style={ styles.plainText }>Loading...</Text>}
      { gotDefaultTasks &&
        currentTasks.map((task, i) => {
          return (
            <Pressable
              key={ i }
              onPress={ () => {expandTask(i)} }
              style={ styles.taskCard }
            >
              <CardHeader
                title={ 'P' + task.priority + ' - ' + task.title }
              >
              </CardHeader>
              {expandedTask === i && (
                <Text style={ styles.description }>
                  { task.description }
                </Text>
              )}
            </Pressable>
          );
        })
      }
      { gotDefaultTasks && currentTasks.length === 0 &&
        <Text style={ styles.plainText }>All caught up!</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    flex: 1,
    width: '100%',
    padding: '6px',
    borderRadius: '3px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'top',
    justifyContent: 'top',
  },

  taskCard: {
    margin: '6px',
    padding: '6px',
    borderRadius: '3px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },

  plainText: {
    textAlign: 'center',
    color: '#FFE',
  },

  title: {
    ...cards.title
  },

  description: {
    margin: '6px',
    fontStyle: 'italic',
    color: '#FFE',
  },
});
