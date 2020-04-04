import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {Styles} from '../../styles/Styles';
import {TaskModel} from '../../database/TaskModel';
import {TaskService} from '../../database/Services';
import {Utils} from '../../utils/Utils';

export const Popup = () => {
  const [modalShow, setModalShow] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskTime, setTaskTime] = useState('');

  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={modalShow}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>New Task</Text>
            <Text>Task Title</Text>
            <TextInput
              placeholder="Task name"
              style={styles.input}
              onChangeText={taskTitleInput => setTaskTitle(taskTitleInput)}
            />
            <Text>Task Time (minutes)</Text>
            <TextInput
              placeholder="minutes"
              style={styles.input}
              onChangeText={taskTimeInput => setTaskTime(taskTimeInput)}
              keyboardType={'numeric'}
            />
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalShow(!modalShow);
              }}>
              <Text style={styles.textStyle}>SUBMIT</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <SafeAreaView style={Styles.constainerRow}>
        <View style={Styles.rowItemSpace1} />
        <View style={Styles.rowItemSpace2}>
          <Text>TASKS</Text>
        </View>
        <View style={Styles.rowItemSpace1}>
          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              setModalShow(true);
            }}>
            <Text style={styles.textStyle}>Show Modal</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
  },
});
