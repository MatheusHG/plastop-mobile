import React from 'react';
import {
  StyleSheet, Text, View, Image, Dimensions, StatusBar,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import ConfirmationIcon from '../../../assets/confirmation.png';

export default function Confirmacao({ navigation, route }) {
  const { texto } = route.params;

  return (
    <>
      <StatusBar backgroundColor="#4CFF74" />
      <View style={styles.container}>
        <AntDesign name="closecircle" size={30} color="#000" style={styles.icon} onPress={() => navigation.goBack()} />
        <Image style={styles.imagem} source={ConfirmationIcon} />
        <Text style={styles.texto}>{texto}</Text>
      </View>
    </>
  );
}
const { width } = Dimensions.get('window'); // full width
const { height } = Dimensions.get('window'); // full height

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    margin: 16,
    right: 0,
    top: 0,
  },
  container: {
    height,
    width,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4CFF74',
  },
  imagem: {
    width: 150,
    height: 140,
    marginTop: 250,
  },
  texto: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 24,
    marginTop: 30,
  },
});
