import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;
`;

export const HeaderInfo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  padding: 0 10px;
`;

export const SearchBar = styled(Searchbar)`
  margin: 10px;
  border-radius: 15px;
`;

export const Info = styled.Text`
  margin-right: 3px;
`;

export const TotalOrders = styled.Text`
  font-weight: bold;
`;
