import React, { useState, useEffect } from 'react';
import { FlatList, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Container } from './styles';

import ClientCard from './components/ClientCard';
import FabButton from '../../../components/FabButton';
import api from '../../../services/api';
import { Client, State } from '../../../interfaces';

interface ClientesHomeProps {
  setClientState: (item: Client) => void;
}

function ClientesHome({ setClientState }: ClientesHomeProps) {
  const navigation = useNavigation();

  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await api.get('/cliente');
        setLoading(false);

        setClients(response.data);
      } catch (error) {
        setLoading(false);
        Alert.alert('Ocorreu um erro na comunicação com o servidor.');
      }
    })();
  }, []);

  const handleClick = () => {
    navigation.navigate('ClientesDados');
  };

  const handleClickCard = (item: Client) => {
    setClientState(item);
    navigation.navigate('NewPedidoDadosCliente', { isNew: false });
  };

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <Container>
      <FlatList
        data={clients}
        keyExtractor={() => String(Math.random())}
        renderItem={
        ({ item }: { item: Client }) => (
          <ClientCard
            client={item}
            onPress={() => handleClickCard(item)}
          />
        )
      }
      />
      <FabButton icon="plus" onPress={handleClick} />
    </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientesHome);
