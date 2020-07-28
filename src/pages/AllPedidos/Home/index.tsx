import React, { useState } from 'react';
import {
  Container, Header, HeaderInfo, Info, TotalOrders, SearchBar,
} from './styles';

export default function AllOrders() {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  return (
    <Container>
      <Header>
        <SearchBar
          placeholder="Cidade/Cliente"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

        <HeaderInfo>
          <Info>Total de</Info>
          <TotalOrders>2 pedidos</TotalOrders>
        </HeaderInfo>
      </Header>
    </Container>
  );
}
