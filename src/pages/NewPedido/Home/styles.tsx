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
  botton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: -15,
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
    marginVertical: 15,
    marginRight: 20,
  },
  barras: {
    width: '100%',
    position: 'relative',
    bottom: 0,
  },
  barraPrice: {
    backgroundColor: '#92C294',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  barraPriceTitle: {
    fontSize: 18,
    marginLeft: 10,
    fontFamily: 'Roboto_400Regular',
  },
  price: {
    fontSize: 18,
    fontFamily: 'OpenSans_600SemiBold',
  },
  barraProceed: {
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    padding: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
});
