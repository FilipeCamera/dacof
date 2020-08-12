import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen')
export const Container = styled.View`
    flex: 1;
    background-color: #F6F6F6;
    align-items: center;
`;
export const BoxLogo = styled.View`
    margin-top: 20px;
    width: ${width - 95};
    height: ${height/2 - 100};
    align-items: center;
    justify-content: center;
`;
export const LogoImage = styled.Image`
    width: 92%;
    height: 100%;
`;

export const BoxMenu = styled.View`
    flex: 1;
    height: ${height/2 - 50};
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #9F3233;
`;

export const TextMenu = styled.Text`
    width: 90%;
    text-align: center;
    border-bottom-width: 1px;
    border-bottom-color: #FFF;
    font-family: 'Cairo-Bold';
    font-size: 18px;
    color: #FFF;
    margin: 10px 0px;
`