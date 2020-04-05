import React, {useState, useEffect} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import {TaskService} from '../../database/Services';

export const ListViewItem = (props: any) => {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <TouchableHighlight
      underlayColor={'#eee'}
      style={styles.container}
      {...props.sortHandlers}>
      <View style={styles.textCenter}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <TouchableHighlight style={styles.textCenter}>
        <Text style={styles.title}>EDIT</Text>
      </TouchableHighlight>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: '#F8F8F8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  textCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
});
