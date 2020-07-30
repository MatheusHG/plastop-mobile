import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

const { width } = Dimensions.get('window');

export const Container = styled.ScrollView`
  flex: 1;
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
  margin: 0 5px;
  width: ${(props) => props.width || 'auto'};
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
