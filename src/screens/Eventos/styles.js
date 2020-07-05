import styled from 'styled-components/native'
import {StyleSheet} from 'react-native'

export const Container = styled.View`
    flex: 1;
    background: #F4F4F4;
    align-items: center;
`;

export const Title = styled.Text`
    margin: 30px 0px 10px;
    font-family: 'Cairo-Bold';
    font-size: 18px;
    color: #5B5B5B;
`;

export const Scroll = styled.ScrollView`
    width: 100%;
`;

export const BoxInforme = styled.View`
    width: 90%;
    height: 260;
    border-radius: 20px;
    flex-direction: column;
`;

export const HeaderInforme = styled.View`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 180;
`;

export const BodyInforme = styled.View`
    margin-top: -50px;
    padding: 10px;
    height: 120px;
`;

export const Imagem = styled.Image`
    width: 100%;
    height: 75%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    opacity: 0.8;
`;

export const TitleInforme = styled.Text`
    font-family: 'Cairo-Bold';
    font-size: 18px;
    color: #4B4B4B;
`;

export const DescInforme = styled.Text`
    font-family: 'Cairo';
    font-size: 14px;
    color: #4B4B4B;
    text-align: justify;
`;

export const BoxData = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: 0px;
    right: 15px;
`;

export const TitleData = styled.Text`
    font-family: 'Cairo-Semibold';
    font-size: 14px;
    margin-right: 5px;
    color: #4B4B4B;
`;

export const DescData = styled.Text`
    font-family: 'Cairo';
    font-size: 14px;
    color: #4B4B4B;
`;

export const styles = StyleSheet.create({
    boxShadow: {
        backgroundColor: '#FFF',
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