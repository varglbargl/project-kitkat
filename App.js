import { StatusBar } from 'expo-status-bar';
import { allTasks } from 'src/initFirebase';
import { StyleSheet, Text, View } from 'react-native';
import { doc, deleteDoc, getDocs, query, where, orderBy } from 'firebase/firestore';

const getTasks = async () => {
  const q = query(allTasks);
  const docs = await getDocs(q);
  const taskList = [];

  docs.forEach(thisDoc => {
    const data = thisDoc.data();
    taskList.push(data.name);
  });
}

let gotDefaultTasks = false

export default function App() {
  const [currentTasks, setTasks] = useState([]);

  if (!gotDefaultTasks) {
    gotDefaultTasks = true;
    getTasks.then(setTasks)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {currentTasks.map((taskName, i) => {
        <Text key={i}>{taskName}</Text>
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
