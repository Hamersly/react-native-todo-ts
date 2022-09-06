import {FC} from "react";
import {useSelector} from 'react-redux'
import {FlatList} from "react-native";
import {sortedListSelector} from "../../store/todoLayer/selectors";
import {Input} from "../Input/Input";
import {FilterBlock} from "../FilterBlock/FilterBlock";
import {Task} from "../Task/Task";
import {ListView} from "./List.styled";

export const List: FC = () => {
  const sortedList = useSelector(sortedListSelector)

  // useEffect(() => {
  //   localStorage.clear();
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // });

  return (
    <ListView>
      <Input/>
      <FilterBlock/>
      <FlatList
        data={sortedList}
        renderItem={({item}) =>
          <Task
            task={item}
          />
        }/>
      {/*<RemoveTasksBlock/>*/}
    </ListView>
  );
};
