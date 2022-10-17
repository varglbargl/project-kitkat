import { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Summary from './src/components/Summary';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Summary");

  const scheduleTaskClick = () => {
    setCurrentScreen("ScheduleTask");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.topHalf}>
        { currentScreen === "Summary" && <Summary /> }
        {/* { currentScreen === "ScheduleTask" && <Summary /> } */}
      </View>
      <Button
        style={styles.addTask}
        onPress={scheduleTaskClick}
        title="Schedule Task"
        accessibilityLabel="Add a task to your todo list"
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

  topHalf: {
    flex: 1,
    width: '100%',
    marginBottom: '12px',
  },
});
