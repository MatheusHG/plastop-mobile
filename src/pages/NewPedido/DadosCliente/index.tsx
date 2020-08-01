import React from 'react';
import {
  StyleSheet, Text, View, Dimensions,
  TouchableOpacity, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard, Platform, Image,
} from 'react-native';
import { Title } from 'react-native-paper';

import {
  Imagem, ContainerAmarelo, CardInfo, ContainerImagem,
  Titulo,
} from './styles';

import Calendario from '../../../../assets/calendario.png';
import Dinheiro from '../../../../assets/dinheiro.png';
import Line from '../../../../assets/line.png';

import FormCLiente from '../../../components/FormCliente';

export default function NewPedidoDadosCliente() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerMain}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <CardInfo>
            <Titulo>Última Compra</Titulo>
            <ContainerAmarelo>
              <ContainerImagem>
                <Imagem source={Calendario} />
                <Text style={styles.text}>02/04/1990</Text>
              </ContainerImagem>
              <Image source={Line} />
              <ContainerImagem>
                <Imagem source={Dinheiro} />
                <Text style={styles.text}>02/04/1990</Text>
              </ContainerImagem>
            </ContainerAmarelo>
          </CardInfo>
          <View style={styles.containerList}>
            <FormCLiente />
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.deletar} onPress={() => {}}>
              <Title style={{ color: '#FFF' }}>Deletar</Title>
            </TouchableOpacity>
            <TouchableOpacity style={styles.salvar} onPress={() => {}}>
              <Title style={{ color: '#FFF' }}>Salvar</Title>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  containerList: {
    flex: 5,
    padding: 10,
    marginBottom: 100,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
  },
  button: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  salvar: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#4CAF50',
  },
  deletar: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FF0000',
  },
});
