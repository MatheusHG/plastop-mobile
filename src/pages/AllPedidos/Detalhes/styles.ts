import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

const { width } = Dimensions.get('window');

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

export const Share = styled(RectButton)`
  width: ${width * 0.07}px;
  height: ${width * 0.07}px;
  margin-right: ${width * 0.05}px;
`;

export const ShareIcon = styled.Image`
  width: 100%;
  height: 100%;
`;
