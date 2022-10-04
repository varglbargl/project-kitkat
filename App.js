import { StatusBar } from 'expo-status-bar';
import { allTasks } from 'src/initFirebase';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { getDocs, query, where, orderBy } from 'firebase/firestore';

const getTasks = async () => {
  const q = query(allTasks, where('deadline', '>', (new Date())), orderBy('deadline'));
  const docs = await getDocs(q);
  // const docs = await getDocs(allTasks);
  const taskList = [];

  docs.forEach(thisDoc => {
    const data = thisDoc.data();
    taskList.push(data.name);

    console.log(data.name);
  });

  return taskList;
}

let gotDefaultTasks = false

export default function App() {
  const [currentTasks, setTasks] = useState([]);

  if (!gotDefaultTasks) {
    gotDefaultTasks = true;
    getTasks()
      .then(setTasks)
      .catch(err => {
        console.log('error: ' + err.message);
      });
  }

  return (
    <View style={styles.container}>
      {currentTasks.map((taskName, i) => {
        return <Text key={i}>{taskName}</Text>
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
