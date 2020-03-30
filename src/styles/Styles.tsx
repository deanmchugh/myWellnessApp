import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  containerCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  flexList: {
    flex: 1,
    flexDirection: 'column',
  },
  task: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    margin: 10,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 100,
  },
  addTask: {
    alignSelf: 'flex-end',
  },
  textInput: {
    height: 40,
    padding: 10,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'steelblue',
    padding: 10,
    margin: 10,
  },
  textLabel: {
    color: 'white',
    fontSize: 18,
  },
});
