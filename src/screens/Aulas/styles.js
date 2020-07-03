import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #f4f4f4;
`;

export const Scroll = styled.ScrollView``;

export const Title = styled.Text`
  margin: 30px 0px 10px;
  font-family: "Cairo-Bold";
  font-size: 18px;
  color: #5b5b5b;
`;

export const BoxAula = styled.View`
  margin: 0px 0px 10px;
  width: 340px;
  height: 170px;
  border-radius: 10px;
  flex-direction: row;
`;

export const BoxAulaSala = styled.View`
  position: absolute;
  top: 40px;
  left: 20px;
  flex-direction: column;
  align-items: center;
`;
export const BoxSala = styled.View`
  width: 100px;
  height: 30px;
  border-radius: 15px;
  background-color: #9f3233;
  justify-content: center;
  align-items: center;
`;
export const TextSala = styled.Text`
  font-family: "Cairo-Semibold";
  font-size: 14px;
  color: #fff;
`;
export const NumSala = styled.Text`
  margin-top: -15px;
  font-family: "Cairo-Semibold";
  font-size: 56px;
  color: #9f3233;
`;
export const BoxAulaText = styled.View`
  width: 180px;
  position: absolute;
  right: 20px;
  top: 10px;
  flex-direction: column;
  align-items: center;
`;

export const TextTitle = styled.Text`
  font-family: "Cairo-Bold";
  font-size: 18px;
  color: #5b5b5b;
`;

export const TextSubTitle = styled.Text`
  margin-top: -5px;
  font-family: "Cairo";
  font-size: 12px;
  color: #5b5b5b;
`;
export const TextHorario = styled.Text`
  margin-top: -2px;
  font-family: "Cairo-Semibold";
  font-size: 13px;
  color: #5b5b5b;
`;

export const TextSubHorario = styled.Text`
  font-family: "Cairo";
  font-size: 12px;
  color: #5b5b5b;
`;
export const BoxAulaAviso = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextAviso = styled.Text`
  margin-left: 12px;
  width: 70%;
  font-family: "Cairo";
  font-size: 10px;
  color: #5b5b5b;
  text-align: center;
`;

export const BoxAviso = styled.View`
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  border: 1px
    ${(props) => {
      if (props.aviso == "aviso") {
        return "#F1CB42";
      }
      if (props.aviso == "sem aula") {
        return "#FF5959";
      }
      return "#44AA3B";
    }};
`;
export const styles = StyleSheet.create({
  boxShadow: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
