import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Header = styled.View`
  width: 100%;
`;

export const HeaderInfo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  padding: 0 20px;
`;

export const SearchBar = styled(Searchbar)`
  margin: 10px;
  border-radius: 15px;
  background-color: #eee;
`;

export const Info = styled.Text`
  color: ${(props) => (props.color ? props.color : 'black')};
  ${(props) => (props.greater ? 'font-size: 20px' : '')}
`;

export const StrongInfo = styled.Text`
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : 'black')};
  ${(props) => (props.greater ? 'font-size: 20px' : '')}
`;
