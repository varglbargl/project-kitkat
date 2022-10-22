import { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Summary from 'components/Summary';
import ScheduleTask from 'components/ScheduleTask';
import ModalCard from 'components/ModalCard';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Summary");
  const [currentModal, setCurrentModal] = useState(null);

  const scheduleTaskClick = () => {
    setCurrentModal("Schedule Task");
  };

  const hideModal = () => {
    setCurrentModal(null);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.topHalf}>
        { currentScreen === "Summary" && <Summary /> }
      </View>

      { /* Modal menu: */ }
      <ModalCard
        visible={ currentModal }
        onClose={ hideModal }
        title="Schedule a task"
      >
        <ScheduleTask />
      </ModalCard>
      <Button
        style={ styles.addTask }
        onPress={ scheduleTaskClick }
        title="Schedule Task"
        accessibilityLabel="Add a task to your schedule"
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
    backgroundColor: '#180028',
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
