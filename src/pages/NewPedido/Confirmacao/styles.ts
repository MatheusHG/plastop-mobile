import styled from 'styled-components/native';
import { Card, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
    justify-content: center;
`;

export const Cards = styled(Card)`
    background-color: #f4f4f4;
    padding: 10px;
`;

export const CardPrice = styled.View`
    flex-direction: column;
`;

export const Price = styled(Title)`
    font-size: 16px;
    margin-right: 5px;
`;

export const ViewBottom = styled.View`
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
`;

export const Quantidade = styled(Title)`
    font-size: 16px;
    font-weight: bold;
`;

export const Barras = styled.View`
    width: 100%;
    position: relative;
    bottom: 0;
`;

export const BarraDiscount = styled.View`
    background-color: #fafafa;
    align-items: center;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const BarraPrice = styled.View`
    background-color: #f3f3f3;
    align-items: center;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Row = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const Discount = styled.TextInput`
    width: 25%;
    padding: 4px;
    font-size: 16px;
    text-align: center;
    border-bottom-width: 1px;
    border-bottom-color: #000;

`;

export const TitlePrice = styled(Title)`
    font-size: 16px;
    margin-left: 10px;
    font-family: Roboto_300Light;
`;

export const TitleValue = styled(Title)`
    font-size: 18px;
    font-family: OpenSans_600SemiBold;
`;

export const BarraProsseguir = styled(TouchableOpacity)`
    background-color: #4CAF50;
    align-items: center;
    padding: 10px;
`;
