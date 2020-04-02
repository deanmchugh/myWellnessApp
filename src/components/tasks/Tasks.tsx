import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Styles} from '../../styles/Styles';
import {Header} from './Header';

export default function TaskScreen() {
  return (
    <SafeAreaView style={Styles.containerList}>
      <Header />
    </SafeAreaView>
  );
}
