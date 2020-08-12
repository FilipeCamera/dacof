import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #F4F4F4;
    align-items: center;
`;

export const BoxButton = styled.View`
    width: 100%;
    margin: 25px 0px 40px;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
`;

export const BoxApresentation = styled.View`
    width: 340;
    height: 400;
    border-radius: 20;
    align-items: center;
`;

export const Title = styled.Text`
    margin: 10px 0px 20px;
    color: #5B5B5B;
    text-align: center;
    font-family: 'Cairo-Bold';
    font-size: 16;
    width: 90%;
`;

export const Paragraph = styled.Text`
  margin: 0px 0px 20px;
  font-family: 'Cairo-SemiBold';
  color: #5b5b5b;
  font-size: 14px;
  text-align: center;
  width: 90%;
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