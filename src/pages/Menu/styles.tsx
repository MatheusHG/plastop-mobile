import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  containerMenu: {
    backgroundColor: '#03071E',
    paddingTop: Constants.statusBarHeight,
    height: '100%',
    width: '100%',
  },
  headerMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03071E',
    height: 120,
  },
  sectionMenu: {
    backgroundColor: '#fff',
    height: '100%',
  },
  itemMenuBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#C3C3C3',
  },
  titleMenu: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 24,
  },
  itemMenu: {
    width: 60,
    height: 60,
    margin: '5%',
    marginTop: '8%',
    marginBottom: '8%',
    marginLeft: '6%',
  },
  itemMenuNext: {
    width: '6%',
    height: '20%',
    marginRight: '2%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
