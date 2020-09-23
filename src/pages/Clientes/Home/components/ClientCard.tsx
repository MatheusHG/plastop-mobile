import React from 'react';
import {
  Card, Paragraph,
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
      <Card.Title
        title={client.nome}
        subtitle={client.cidade}
        right={() => <Paragraph>{client.telefone1}</Paragraph>}
        rightStyle={{
          marginLeft: 10,
          marginRight: 10,
        }}
      />
    </Container>
  );
}

const Container = styled(Card)`
  margin: 5px 0;
`;

export default ClientCard;
