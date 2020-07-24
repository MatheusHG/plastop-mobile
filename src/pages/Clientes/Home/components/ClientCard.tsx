import React from 'react';
import {
  Card, IconButton,
} from 'react-native-paper';
import styled from 'styled-components/native';

import { Client } from '../../../../interfaces';

interface ClientCardProps {
  client: Client;
  onPress?: () => void;
}

function ClientCard(props: ClientCardProps) {
  const {
    client, onPress,
  } = props;

  return (
    <Container onPress={onPress}>
      <Card.Title title={client.name} subtitle={client.city} left={() => <IconButton size={40} icon="account" />} />
    </Container>
  );
}

const Container = styled(Card)`
  margin: 5px 0;
`;

export default ClientCard;
