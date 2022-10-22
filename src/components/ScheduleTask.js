import { View, Button, Pressable, Text, StyleSheet } from 'react-native';
import { tasks } from 'initFirebase';
import { useState } from 'react';
import { getDocs, query, orderBy } from 'firebase/firestore';

import CardHeader from 'components/CardHeader';

let loadedTasks = null;

export default function Summary() {
  const [currentTasks, setTasks] = useState(loadedTasks || []);
  const [selectedTask, setSelectedTask] = useState(null);

  const getTasks = async () => {
    const q = query(tasks, orderBy('title'));
    const docs = await getDocs(q);
    const taskList = [];

    docs.forEach(task => {
      const taskData = task.data();

      taskList.push(taskData);
    });

    loadedTasks = taskList;

    return taskList;
  };

  const refreshSchedule = () => {
    if (loadedTasks) {
      loadedTasks = null;
      setTasks([]);
    }

    getTasks()
      .then(setTasks)
      .catch(err => {
        console.error(err.message);
      });
  };

  const selectTask = (index) => {
    setSelectedTask(index);
  };

  const newTask = () => {
    setSelectedTask(null);
  };

  if (!loadedTasks) {
    refreshSchedule();
  }

  return (
    <View style={ styles.scheduleTaskContainer }>
      {!loadedTasks &&
        <Text style={ styles.plainText }>Loading...</Text>
      }

      <View style={ styles.taskList }>
        <CardHeader title="Task">
          <Button
            title="New Task"
            onPress={ newTask }
            accessibilityLabel="Create a new Task"
          />
        </CardHeader>
        { loadedTasks &&
          currentTasks.map((task, i) => {
            return (
              <Pressable
                key={ i }
                onPress={ () => {selectTask(i)} }
                style={ [styles.taskCard, selectedTask === i ? styles.selected : null] }
              >
                <CardHeader title={ task.title }></CardHeader>
              </Pressable>
            );
          })
        }
      </View>

      { loadedTasks && currentTasks.length === 0 &&
        <Text style={ styles.plainText }>All caught up!</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  scheduleTaskContainer: {
    flex: 1,
    width: '100%',
    padding: '6px',
    borderRadius: '3px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },

  taskList: {
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
    fontSize: '1.12em',
    alignSelf: 'center',
    fontWeight: 600,
    color: '#FFE',
    marginBottom: '2px',
  },

  description: {
    margin: '6px',
    fontStyle: 'italic',
    color: '#FFE',
  },

  selected: {
    backgroundColor: 'red',
  },
});
