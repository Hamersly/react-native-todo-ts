import {FC} from "react";
import {DateBlock} from "../DataBlock/DateBlock";
import {TaskChanger} from "../TaskChanger/TaskChanger";
import {TaskWrapper} from "../TaskWrapper/TaskWrapper";
import {TaskBlock,} from "./Task.styled";
import {useDispatch} from "react-redux";
import {Todo} from "../../types/types";
import {changeTask} from "../../store/todoLayer/slice";


interface Props {
  task: Todo
}

export const Task: FC<Props> = ({task}) => {
  const {id, date, text, isCompleted, change} = task
  const dispatch = useDispatch()

  const changeValueTodo = (id: number, value: string, text?: string): any => {
    dispatch(changeTask({id, value, text}))
  };


  return (
    <TaskBlock>

      <DateBlock
        change={change}
        date={date}
        id={id}
        changeValueTodo={changeValueTodo}/>

      {change ?
        (<TaskChanger
            text={text}
            id={id}
            changeValueTodo={changeValueTodo}
          />
        ) :

        (<TaskWrapper
            id={id}
            isCompleted={isCompleted}
            text={text}
            changeValueTodo={changeValueTodo}/>
        )}

    </TaskBlock>
  );
};
