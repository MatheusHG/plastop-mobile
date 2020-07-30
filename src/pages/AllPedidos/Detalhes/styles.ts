import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Space = styled.View`
  width: 100%;
  height: 70px;
`;

export const DetailsContainer = styled.View`
  width: 100%;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
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
  flex-direction: row;
  flex-wrap: wrap;
`;

export const DataWrap = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin: 2px 5px;
  width: ${(props) => props.width || 'auto'};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
`;
