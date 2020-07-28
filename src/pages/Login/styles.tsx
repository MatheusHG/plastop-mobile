import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03071E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    width: '90%',
    height: 100,
  },
  title: {
    color: '#FFBE0B',
    fontSize: 42,
    fontWeight: 'bold',
    padding: 10,
  },
  titleSub: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Roboto_500Medium',
    padding: 10,
  },
  titleLogin: {
    fontSize: 18,
    color: '#B8B8B8',
    padding: 10,
    fontFamily: 'Roboto_300Light',
  },
  inputLogin: {
    flex: 1,
    alignItems: 'center',
    width: '90%',
  },
  action: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    margin: 10,
    padding: 5,
  },
  textInput: {
    width: '80%',
    color: '#03071E',
    padding: 10,
  },
  button: {
    backgroundColor: '#FFBE0B',
    height: 60,
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: '#D9A20A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto_500Medium',
    marginLeft: 40,
    color: '#FFF',
    fontSize: 20,
  },
});
