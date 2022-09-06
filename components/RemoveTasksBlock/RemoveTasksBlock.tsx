import {removeAllTasks} from "../../store/todoLayer/slice";
import {RemBlock, RemoveTasksButton} from "./RemoveTasksBlock.styles";
import {useDispatch, useSelector} from "react-redux";
import {Text} from "react-native";
import {FC} from "react";
import {RootState} from "../../types/types";


export const RemoveTasksBlock: FC = () => {
  const taskList = useSelector((state: RootState) => state.todos.sortedList)
  const dispatch = useDispatch()

  return (
    <RemBlock>
      {taskList.length > 1 &&
        <RemoveTasksButton onPress={() => dispatch(removeAllTasks())}>
          <Text style={{fontSize: 18}}>Удалить всё</Text>
        </RemoveTasksButton>
      }
    </RemBlock>
  )
};