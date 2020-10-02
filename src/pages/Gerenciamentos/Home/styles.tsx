import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
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
    right: -15,
    bottom: -15,
    width: 60,
    height: 60,
  },
  cardPrice: {
    marginTop: 32,
    marginRight: 20,
  },
  modalTitle: {
    fontSize: 18,
    padding: 15,
  },
});
