import React, { useState } from 'react';
import {
  StyleSheet, KeyboardAvoidingView, View,
  TouchableOpacity, TouchableWithoutFeedback, Keyboard,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Title, TextInput } from 'react-native-paper';

export default function Rota() {
  const navigation = useNavigation();
  const theme = { colors: { primary: '#03071E' } };

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerMain}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerMain}>
          <View style={styles.containerList}>
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
          </View>
          <TouchableOpacity
            style={styles.barraSalvar}
            onPress={() => {
              navigation.navigate('DadosEntrega');
            }}
          >
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
  containerList: {
    flex: 5,
    padding: 10,
    marginBottom: 100,
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
