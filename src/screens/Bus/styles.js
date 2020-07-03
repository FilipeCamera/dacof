import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #F4F4F4;
    align-items: center;
`;
export const Scroll = styled.ScrollView`
    width: 100%;
`;
export const Title = styled.Text`
    margin: 30px 0px 10px;
    font-family: 'Cairo-Bold';
    font-size: 18px;
    color: #5B5B5B;
`;
export const BoxBus = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin: 5px 0px 5px;
`;

export const CardBus = styled.View`
    width: 160px;
    background-color: #FF9090;
    border-radius: 20px;
    align-items: center;
    flex-direction: column;
`;
export const BoxHeader = styled.View`
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0px;
`;
export const CardText = styled.Text`
    font-family: 'Cairo-Bold';
    font-size: 16px;
    color: #963132;
    width: 60%;
`;
export const CardSubText = styled.Text`
    font-family: 'Cairo-Bold';
    font-size: 14px;
    color: #3B3B3B;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
`;
export const BoxHorario = styled.View`
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: 5px 0px;
`;
export const CardHText = styled.Text`
    font-family: 'Cairo-Bold';
    font-size: 14px;
    color: #3B3B3B;
`;
export const styles = StyleSheet.create({
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
})