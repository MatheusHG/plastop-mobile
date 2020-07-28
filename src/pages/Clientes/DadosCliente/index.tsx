import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { Button } from 'react-native-paper';
import FormCLiente from '../../../components/FormCliente';

export default function Rota() {
  return (
    <>
      <FormCLiente />
      <Button color="#FFF" style={styles.buttonSave}> Salvar Cliente </Button>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37323e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    color: '#f3ca40',
    fontWeight: 'bold',
  },
  description: {
    top: 10,
    color: '#BFBDC1',
    fontWeight: '100',
    width: 300,
    textAlign: 'center',
  },
  buttonSave: {
    width: '100%',
    height: 45,
    backgroundColor: '#4CAF50',
  },
});
