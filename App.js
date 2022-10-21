import { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Summary from 'components/Summary';
import ScheduleTask from 'components/ScheduleTask';

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
      <Modal
        animationType="slide"
        transparent={true}
        style={styles.modalMenu}
        visible={currentModal}
      >
        <Pressable
          onPress={hideModal}
          style={styles.closeButton}
          accessibilityLabel="Close pop-up menu"
        >
          <Text style={styles.closeX}>X</Text>
        </Pressable>
        <ScheduleTask />
      </Modal>
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
    backgroundColor: '#180028',
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  modalMenu: {
    backgroundColor: 'transparent',
  },

  closeButton: {
    padding: '3px 6px',
    backgroundColor: 'transparent',
    textAlign: 'right',
  },

  closeX: {
    color: '#FFF',
    fontWeight: 800,
  },

  topHalf: {
    flex: 1,
    width: '100%',
    marginBottom: '12px',
  },
});
