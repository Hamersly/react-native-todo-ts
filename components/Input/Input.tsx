import {FC, useState} from "react";
import {NativeSyntheticEvent, Text, TextInputChangeEventData} from "react-native";
import {AddButton, InputBlock, StyledInput} from "./Input.styled";
import {useDispatch} from "react-redux";
import {addTask} from "../../store/todoLayer/slice";
import {fullTodoFunc} from "../../helpers/helpers";


export const Input: FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const addTodoInList = () => {
    if (text.trim().length) {
      dispatch(addTask(fullTodoFunc(text)))
      setText("");
    }
  };

  const handleSubmit = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    if (e.nativeEvent.key === "Enter") {
      addTodoInList();
    }
  };

  return (
    <InputBlock>
      <StyledInput
        type="text"
        value={text}
        multiline={true}
        onChangeText={setText}
        onKeyPress={handleSubmit}
        placeholder="Введи задачу"
      />
      <AddButton
        onPress={addTodoInList}
      >
        <Text style={{fontSize: 30}}> + </Text>
      </AddButton>
    </InputBlock>
  );
};


