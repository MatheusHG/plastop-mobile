import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

import ClientCard from './components/ClientCard';
import FabButton from '../../../components/FabButton';
import { Client } from '../../../interfaces';

const clients = [
  {
    name: 'Davi Gomes Passos Sousa',
    city: 'Sumé - PB',
    phone: '(83) 9 9884-1809',
  },
  {
    name: 'Arthur Stevo',
    city: 'Campina Grande - PB',
    phone: '(83) 9 9999-1111',
  },
  {
    name: 'Matheuszin da Massa',
    city: 'Campina Grande - PB',
    phone: '(83) 9 4002-8922',
  },
];

export default function ClientesHome() {
  const navigation = useNavigation();
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
