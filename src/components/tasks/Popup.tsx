import React, {useState} from 'react';
import {Modal, Text, TouchableHighlight, View, TextInput} from 'react-native';
import {Styles} from '../../styles/Styles';
import {TaskModel} from '../../database/TaskModel';
import {TaskService} from '../../database/Services';
import {Utils} from '../../utils/Utils';

export const Popup = (show: boolean) => {
  <View>
    <Modal animationType="slide" transparent={true} visible={show}>
        
    </Modal>
  </View>;
};
