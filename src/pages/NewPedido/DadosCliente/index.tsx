import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Dimensions,
  TouchableOpacity, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard, Platform, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Title } from 'react-native-paper';

import {
  Imagem, ContainerAmarelo, CardInfo, ContainerImagem,
  Titulo,
} from './styles';

import Calendario from '../../../../assets/calendario.png';
import Dinheiro from '../../../../assets/dinheiro.png';
import Line from '../../../../assets/line.png';
import FormCLiente from '../../../components/FormCliente';
import { Client, State } from '../../../interfaces';

interface NewPedidoDadosClienteProps {
  client: Client;
  setClientState: (item: Client) => void;
}

type ParamList = {
  NewPedidoDadosCliente: {
    isNew: boolean;
  };
};

function NewPedidoDadosCliente({ client }: NewPedidoDadosClienteProps) {
  const route = useRoute<RouteProp<ParamList, 'NewPedidoDadosCliente'>>();

  const { isNew } = route.params;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerMain}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {
            !isNew && (
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
            )
          }
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

const mapStateToProps = ({ client }: State) => ({
  client,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setClientState: (item: Client) => {
    dispatch({
      type: 'SET_CLIENT',
      payload: { client: item },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPedidoDadosCliente);

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
