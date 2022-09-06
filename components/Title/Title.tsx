import {StyledTitle} from "./Title.styled";
import {FC} from "react";
import {View} from "react-native";

export const Title: FC = () => {
  return (
    <View style={{alignItems: "center", margin: 20}}>
      <StyledTitle>Список задач</StyledTitle>
    </View>
  );
};
