import { View, Button, Pressable, Text, StyleSheet } from 'react-native';
import { schedule } from 'initFirebase';
import { useState } from 'react';
import { getDoc, getDocs, query, where, orderBy } from 'firebase/firestore';

import TaskCard from 'components/TaskCard';

import { colors, cards } from 'styles';

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
            <TaskCard
              key={ i }
              task={ task }
              expanded={ expandedTask === i }
              onPress={ ()=>expandTask(i) }
            />
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
    ...colors.lightBkg,
    flex: 1,
    width: '100%',
    padding: '6px',
    borderRadius: '3px',
    alignItems: 'top',
    justifyContent: 'top',
  },

  taskCard: {
    ...colors.lightBkg,
    margin: '6px',
    padding: '6px',
    borderRadius: '3px',
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
