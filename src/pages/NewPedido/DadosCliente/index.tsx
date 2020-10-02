import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, Dimensions,
  TouchableOpacity, KeyboardAvoidingView, Alert,
  TouchableWithoutFeedback, Keyboard, Platform, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Title, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import LoadingModal from '../../../components/LoadingModal';
import {
  Imagem, ContainerAmarelo, CardInfo, ContainerImagem,
  Titulo,
} from './styles';
import api from '../../../services/api';

import Calendario from '../../../../assets/calendario.png';
import Dinheiro from '../../../../assets/dinheiro.png';
import Line from '../../../../assets/line.png';
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
  const theme = { colors: { primary: '#03071E' } };
  const { isNew } = route.params;

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [social, setSocial] = useState('');
  const [fantasyName, setFantasyName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [rg, setRg] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [neighbour, setNeighbour] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const response = await api.get(`/clientes/${client.codigo}`);
        const newClient: Client = response.data;

        setName(newClient.nome || '');
        setSocial(newClient.razao_social || '');
        setFantasyName(newClient.fantasia || '');
        setCnpj(newClient.cnpj || '');
        setRg(newClient.rg || '');
        setCity(newClient.cidade || '');
        setUf(newClient.uf || '');
        setAddress(newClient.cidade || '');
        setNumber(newClient.numero || '');
        setNeighbour(newClient.bairro || '');
        setPhone1(newClient.telefone1 || '');
        setPhone2(newClient.telefone2 || '');
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Alert.alert('Ocorreu um erro na comunicação com o servidor.');
      }
    })();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerMain}
    >
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
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
          <ScrollView style={styles.form}>
            <View style={styles.containerRow}>
              <TextInput
                label="Nome do Cliente"
                style={styles.large}
                theme={theme}
                value={name}
                onChangeText={setName}
              />
              <TextInput
                label="Código"
                style={styles.medium}
                keyboardType="number-pad"
                maxLength={8}
                theme={theme}
                value={code}
                onChangeText={setCode}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="Razão Social"
                style={styles.large}
                theme={theme}
                value={social}
                onChangeText={setSocial}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="Nome Fantasia"
                style={styles.large}
                theme={theme}
                value={fantasyName}
                onChangeText={setFantasyName}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="CNPJ/CPF"
                style={styles.large}
                keyboardType="number-pad"
                theme={theme}
                value={cnpj}
                onChangeText={setCnpj}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="Incrição Estadual/RG"
                style={styles.large}
                keyboardType="number-pad"
                theme={theme}
                value={rg}
                onChangeText={setRg}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="Cidade"
                style={styles.large}
                theme={theme}
                value={city}
                onChangeText={setCity}
              />
              <TextInput
                label="UF"
                style={styles.medium}
                maxLength={2}
                theme={theme}
                value={uf}
                onChangeText={setUf}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="Endereço"
                style={styles.large}
                theme={theme}
                value={address}
                onChangeText={setAddress}
              />
              <TextInput
                label="Número"
                style={styles.medium}
                keyboardType="number-pad"
                theme={theme}
                value={number}
                onChangeText={setNumber}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="Bairro"
                style={styles.large}
                theme={theme}
                value={neighbour}
                onChangeText={setNeighbour}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="Telefone 1"
                style={styles.large}
                keyboardType="number-pad"
                theme={theme}
                value={phone1}
                onChangeText={setPhone1}
              />
              <TextInput
                label="Telefone 2"
                keyboardType="number-pad"
                style={styles.large}
                theme={theme}
                value={phone2}
                onChangeText={setPhone2}
              />
            </View>
          </ScrollView>
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
      <LoadingModal isVisible={loading} />
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
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  containerList: {
    width: '100%',
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  large: {
    flex: 2,
    margin: 10,
    backgroundColor: '#FFF',
    fontWeight: 'bold',
  },
  medium: {
    flex: 1,
    backgroundColor: '#FFF',
    fontWeight: 'bold',
    margin: 10,
  },
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    paddingTop: 0,
  },
});
