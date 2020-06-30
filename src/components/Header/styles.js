import {getStatusBarHeight} from 'react-native-status-bar-height'
import {Dimensions} from 'react-native'
import styled from 'styled-components/native'

const {width} = Dimensions.get('screen')

export const Container = styled.View`
    margin-top: ${getStatusBarHeight()};
    padding: 10px 20px;
    width: 100%;
    flex-direction: row;
    align-items: center;   
`;

export const MenuButton = styled.TouchableOpacity``;
export const MenuImage = styled.Image``;

export const MenuText = styled.Text`
    font-family: 'Cairo-Bold';
    font-size: 16px;
    color: #9F3233;
    margin-left: ${width/4 - 40};
`;