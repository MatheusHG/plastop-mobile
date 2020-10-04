import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Title, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';
import { useRoute, RouteProp } from '@react-navigation/native';

import { ButtonSave } from './styles';

type ParamList = {
  ClientesDados: {
    client: any;
  };
};

function NewPedidoDadosEntrega() {
  const theme = { colors: { primary: '#03071E' } };
  const route = useRoute<RouteProp<ParamList, 'ClientesDados'>>();

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
          />
        </ContainerRow>
        <ContainerRow>
          <TextInput
            label="Forma de Pagamento"
            style={styles.large}
            theme={theme}
          />
        </ContainerRow>
        <ContainerRow>
          <TextInput
            label="Cidade"
            style={styles.large}
            theme={theme}
          />
          <TextInput
            label="UF"
            style={styles.medium}
            theme={theme}
            maxLength={2}
          />
        </ContainerRow>
        <ContainerRow>
          <TextInput
            label="Endereço"
            style={styles.large}
            keyboardType="number-pad"
            theme={theme}
          />
          <TextInput
            label="Número"
            style={styles.medium}
            theme={theme}
          />
        </ContainerRow>
        <ContainerRow>
          <TextInput
            label="Bairro"
            style={styles.large}
            keyboardType="number-pad"
            theme={theme}
          />
        </ContainerRow>

        <ContainerRow>
          <TextInput
            label="Telefone 1"
            style={styles.large}
            keyboardType="number-pad"
            theme={theme}
          />
          <TextInput
            label="Telefone 2"
            keyboardType="number-pad"
            style={styles.large}
            theme={theme}
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
