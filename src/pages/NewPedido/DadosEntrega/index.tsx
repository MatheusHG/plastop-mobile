import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Title, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Client } from '../../../interfaces';

import { ButtonSave } from './styles';

type ParamList = {
  ClientesDados: {
    client: Client;
  };
};

function NewPedidoDadosEntrega() {
  const theme = { colors: { primary: '#03071E' } };
  const route = useRoute<RouteProp<ParamList, 'ClientesDados'>>();
  const { client } = route.params;

  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [pagamento, setPagamento] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [referencia, setReferencia] = useState('');
  const [telefone1, setTelefone1] = useState('');
  const [telefone2, setTelefone2] = useState('');
  const [observacao, setObservacao] = useState('');

  useEffect(() => {
    setNome(client.nome as string);
    setCodigo(String(client.codigo));
    setCidade(client.cidade as string);
    setUf(client.uf as string);
    setRua(client.rua as string);
    setNumero(String(client.numero));
    setBairro(client.bairro as string);
    setReferencia(client.referencia as string);
    setTelefone1(client.telefone1 as string);
    setTelefone2(client.telefone2 as string);
  }, []);

  // eslint-disable-next-line no-console
  console.log('client', route.params.client);

  return (
    <>
      <Container>
        <ContainerRow>
          <TextInput
            style={styles.large}
            label="Nome do Cliente"
            theme={theme}
            value={nome}
            onChangeText={setNome}
          />
        </ContainerRow>
        <ContainerRow>
          <TextInput
            label="Forma de Pagamento"
            style={styles.large}
            theme={theme}
            value={pagamento}
            onChangeText={setPagamento}
          />
        </ContainerRow>
        <ContainerRow>
          <TextInput
            label="Cidade"
            style={styles.large}
            theme={theme}
            value={cidade}
            onChangeText={setCidade}
          />
          <TextInput
            label="UF"
            style={styles.medium}
            theme={theme}
            maxLength={2}
            value={uf}
            onChangeText={setUf}
          />
        </ContainerRow>
        <ContainerRow>
          <TextInput
            label="Endereço"
            style={styles.large}
            keyboardType="number-pad"
            theme={theme}
            value={rua}
            onChangeText={setRua}
          />
          <TextInput
            label="Número"
            style={styles.medium}
            theme={theme}
            value={numero}
            onChangeText={setNumero}
          />
        </ContainerRow>
        <ContainerRow>
          <TextInput
            label="Bairro"
            style={styles.large}
            keyboardType="number-pad"
            theme={theme}
            value={bairro}
            onChangeText={setBairro}
          />
        </ContainerRow>

        <ContainerRow>
          <TextInput
            label="Telefone 1"
            style={styles.large}
            keyboardType="number-pad"
            theme={theme}
            value={telefone1}
            onChangeText={setTelefone1}
          />
          <TextInput
            label="Telefone 2"
            keyboardType="number-pad"
            style={styles.large}
            theme={theme}
            value={telefone2}
            onChangeText={setTelefone2}
          />
        </ContainerRow>
        <ContainerRow>
          <TextInput
            label="Observação"
            style={styles.large}
            keyboardType="number-pad"
            theme={theme}
            value={observacao}
            onChangeText={setObservacao}
          />
        </ContainerRow>
      </Container>
      <ButtonSave
        onPress={() => {
        }}
      >
        <Title style={{ color: '#fff' }}>Finalizar Pedido</Title>
      </ButtonSave>
    </>
  );
}

export default NewPedidoDadosEntrega;

const Container = styled.ScrollView`
    flex-direction: column;
    background-color: #FFF;
`;

const ContainerRow = styled.View`
    flex-direction: row;
    padding: 10px;
    padding-top: 0;
`;

const styles = StyleSheet.create({
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
});
