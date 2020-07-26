import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  search: {
    backgroundColor: '#EEEEEE',
    marginTop: 10,
    width: '95%',
    borderRadius: 15,
  },
  card: {
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  cardPhoto: {
    height: 100,
  },
  delete: {
    position: 'absolute',
    right: 0,
    bottom: -3,
  },
  cardPrice: {
    marginTop: 20,
  },
});
