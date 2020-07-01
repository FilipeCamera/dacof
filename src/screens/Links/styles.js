import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
export const Container = styled.View`
    flex: 1;
    background-color: #F4F4F4;
    align-items: center;
`;

export const Scroll = styled.ScrollView``;

export const Title = styled.Text`
    margin: 30px 0px 10px;
    font-family: 'Cairo-Bold';
    font-size: 18px;
    color: #5B5B5B;
`;

export const BoxLink = styled.View`
    margin: 10px 10px;
    width: 340px;
    background-color: #FFF;
    border-radius: 10px;
`;

export const LinkTextBox = styled.View`
    margin: 10px;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const BoxGroup = styled.View`
    flex-direction: column;
    margin: 10px;
    padding: 10px;
`;
export const TextGroup = styled.Text`
    font-family: 'Cairo-Bold';
    font-size: 16px;
    color: #5B5B5B;
`;
export const LinkText = styled.Text`
    font-family: 'Cairo-Semibold';
    font-size: 16px;
    color: #5B5B5B;
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