import {Changer, ChangeText, SaveButton} from "./TaskChanger.styled";
import {FC, useState} from "react";
import {Text} from "react-native";

interface Props {
  text: string
  id: number

  changeValueTodo(id: number, value: string, text?: string): void

}

export const TaskChanger: FC<Props> = ({id, text, changeValueTodo}) => {
  const [taskText, setTaskText] = useState<string>(text);

  const changeTodo = (): void => {
    if (taskText.trim().length) {
      changeValueTodo(id, 'change', taskText);
      setTaskText("");
    }
  };

  return (
    <Changer>
      <ChangeText
        defaultValue={text}
        onChangeText={(e: string) => setTaskText(e)}
        multiline={true}
        numberOfLines={1}
      />
      <SaveButton onPress={changeTodo}>
        <Text style={{fontSize: 18}}>Сохранить</Text>
      </SaveButton>
    </Changer>
  );
}