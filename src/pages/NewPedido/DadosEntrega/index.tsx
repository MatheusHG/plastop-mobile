import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';

import { ButtonSave } from './styles';
import FormEntrega from '../../../components/FormEntrega';

export default function NewPedidoDadosEntrega() {
  return (
    <>
      <FormEntrega />
      <ButtonSave
        onPress={() => {
        }}
      >
        <Title style={{ color: '#fff' }}>Finalizar Pedido</Title>
      </ButtonSave>
    </>
  );
}
