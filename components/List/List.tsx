import {FC, useEffect} from "react";
import {useSelector} from 'react-redux'
import {FlatList} from "react-native";
import {sortedListSelector} from "../../store/todoLayer/selectors";
import {Input} from "../Input/Input";
import {FilterBlock} from "../FilterBlock/FilterBlock";
import {Task} from "../Task/Task";
import {ListView} from "./List.styled";
import {RootState} from "../../types/types";
import {setEntries} from "../../helpers/helpers";

export const List: FC = () => {
  const todos = useSelector((state: RootState) => state.todos)
  const sortedList = useSelector(sortedListSelector)

  useEffect(() => {
     setEntries(todos)
  })

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
    </ListView>
  );
};
