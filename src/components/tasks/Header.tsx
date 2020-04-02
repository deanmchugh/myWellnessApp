import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableHighlight,
  Text,
  View,
  Image,
} from 'react-native';
import {Styles} from '../../styles/Styles';

export const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <SafeAreaView style={Styles.constainerRow}>
      <View style={Styles.rowItemSpace1} />
      <View style={Styles.rowItemSpace2}>
        <Text style={Styles.textCenter}>TASKS</Text>
      </View>
      <View style={Styles.rowItemSpace1}>
        <TouchableHighlight onPress={() => setShowPopup(true)}>
          <Image
            source={require('../../images/plus.png')}
            resizeMode="stretch"
          />
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
