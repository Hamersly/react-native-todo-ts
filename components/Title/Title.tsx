import {StyledTitle} from "./Title.styled";
import {FC, useEffect} from "react";
import {View} from "react-native";
import {addState} from "../../store/todoLayer/slice";
import {useDispatch} from "react-redux";

export const Title: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addState())
  }, [])

  return (
    <View style={{alignItems: "center", margin: 20}}>
      <StyledTitle>Список задач</StyledTitle>
    </View>
  );
};
