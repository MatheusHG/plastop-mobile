import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
`;

export const DetailsContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const Data = styled(Card)`
  width: 100%;
  background-color: #eee;
  padding: 10px;
  border-radius: 15px;
  margin-top: 5px;
`;

export const DataContainer = styled.View`
  width: 100%;
`;

export const DataWrap = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;
