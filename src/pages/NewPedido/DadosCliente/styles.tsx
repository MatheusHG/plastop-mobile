import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export const Imagem = styled.Image`
    width: 100%;
    height: 100%;
    flex: 1;
`;

export const ContainerImagem = styled.View`
    width: 8%;
    margin-right: 1%;
`;

export const ContainerAmarelo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3%;
`;

export const CardInfo = styled.View`
    background-color: #f3ca40;
    flex: 1;
`;

export const Titulo = styled.Text`
    align-self: center;
    font-weight: bold;
    font-size: 18px;
    margin-top: 5%
`;
