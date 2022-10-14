import { View, Pressable, Text, StyleSheet } from 'react-native';
import { allTasks } from 'initFirebase';
import { useState } from 'react';
import { getDocs, query, where, orderBy } from 'firebase/firestore';

let gotDefaultTasks = false;

const getTasks = async () => {
  const q = query(allTasks, where('deadline', '<', (new Date())), orderBy('deadline'));
  const docs = await getDocs(q);
  const taskList = [];

  docs.forEach(thisDoc => {
    const data = thisDoc.data();

    taskList.push(data);
  });

  gotDefaultTasks = true;
  return taskList;
};

export default function Summary() {
  const [currentTasks, setTasks] = useState([]);
  const [expandedTask, setExpandedTask] = useState(null);

  if (!gotDefaultTasks) {
    getTasks()
      .then(setTasks)
      .catch(err => {
        console.error(err.message);
      });
  }

  const expandTask = (index) => {
    if (expandedTask === index) {
      setExpandedTask(null);
    } else {
      setExpandedTask(index)
    }
  }

  return (
    <View style={styles.summaryContainer}>
      {!gotDefaultTasks && <Text style={styles.plainText}>Loading...</Text>}
      {gotDefaultTasks && currentTasks.map((task, i) => {
        return (
          <Pressable
            key={i}
            onPress={() => {expandTask(i)}}
            style={styles.taskCard}
          >
            <Text style={styles.title}>{task.title}</Text>
            {expandedTask === i && (
              <Text style={styles.description}>{task.description}</Text>
            )}
          </Pressable>
        );
      })}
      {gotDefaultTasks && currentTasks.length === 0 &&
        <Text style={styles.plainText}>All caught up!</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    flex: 1,
    width: '100%',
    marginBottom: '6px',
    padding: '6px',
    borderRadius: '3px',
    backgroundColor: '#324',
    alignItems: 'top',
    justifyContent: 'top',
  },
  taskCard: {
    margin: '6px',
    padding: '6px',
    borderRadius: '3px',
    backgroundColor: '#546',
  },
  plainText: {
    textAlign: 'center',
    color: '#FFE',
  },

  title: {
    fontSize: '1.12em',
    fontWeight: 600,
    color: '#FFE',
  },

  description: {
    margin: '6px',
    fontStyle: 'italic',
    color: '#FFE',
  },
});
