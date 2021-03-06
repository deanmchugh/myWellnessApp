import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Styles} from '../../styles/Styles';
import {Popup} from './Popup';

export default function TaskScreen() {
  return (
    <SafeAreaView style={Styles.containerList}>
      <Popup />
    </SafeAreaView>
  );
}
