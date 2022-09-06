import {TaskText, Wrapper} from "./TaskWrapper.styled";
import {FC} from "react";

interface Props {
  id: number
  isCompleted: boolean
  text: string

  changeValueTodo(id: number, value: string, text?: string): void
}

export const TaskWrapper: FC<Props> = ({id, isCompleted, text, changeValueTodo}) => {

  const TaskStatus = () => {
    if (isCompleted) return 'text-decoration: line-through;'
  }

  return (
    <Wrapper onPress={() => changeValueTodo(id, 'isCompleted')}>
      <TaskText completed={TaskStatus}>
        {text}
      </TaskText>
    </Wrapper>
  );
}