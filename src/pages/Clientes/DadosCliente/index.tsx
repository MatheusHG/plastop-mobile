import React from 'react';
import {
  StyleSheet, KeyboardAvoidingView, View,
  TouchableOpacity, TouchableWithoutFeedback, Keyboard,
  Platform,
} from 'react-native';
import { Title } from 'react-native-paper';
import FormCLiente from '../../../components/FormCliente';

export default function Rota() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerMain}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerMain}>
          <FormCLiente />
          <TouchableOpacity style={styles.barraSalvar} onPress={() => {}}>
            <Title style={{ color: '#fff' }}>Salvar Cliente</Title>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
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
  barraSalvar: {
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    padding: 10,
  },
});
