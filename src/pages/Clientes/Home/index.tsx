import React, { useState, useEffect } from 'react';
import { FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

import ClientCard from './components/ClientCard';
import FabButton from '../../../components/FabButton';
import api from '../../../services/api';
import { Client } from '../../../interfaces';

export default function ClientesHome() {
  const navigation = useNavigation();

  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/cliente');

        setClients(response.data);
      } catch (error) {
        Alert.alert('Ocorreu um erro na comunicação com o servidor.');
      }
    })();
  }, []);

  const handleClick = () => {
    navigation.navigate('ClientesDados');
  };

  const handleClickCard = () => {
    navigation.navigate('NewPedidoDadosCliente');
  };

  return (
    <Container>
      <FlatList
        data={clients}
        keyExtractor={() => String(Math.random())}
        renderItem={
        ({ item }: { item: Client }) => (
          <ClientCard
            client={item}
            onPress={() => handleClickCard()}
          />
        )
      }
      />
      <FabButton icon="plus" onPress={handleClick} />
    </Container>
  );
}
