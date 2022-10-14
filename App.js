import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet } from 'react-native';
import Summary from './src/components/Summary';

const createTask = () => {

}

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Summary />
      <Button
        onPress={createTask}
        title="New Task"
        accessibilityLabel="Add a new task to your todo list"
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: '20px',
    flexDirection: 'column',
    backgroundColor: '#102',
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
