import {FC, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {FlatList} from "react-native";
import {sortedListSelector} from "../../store/todoLayer/selectors";
import {Input} from "../Input/Input";
import {FilterBlock} from "../FilterBlock/FilterBlock";
import {Task} from "../Task/Task";
import {ListView} from "./List.styled";
import {RootState, Todos} from "../../types/types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addState} from "../../store/todoLayer/slice";

export const List: FC = () => {
  const todos = useSelector((state:RootState) => state.todos)
  const sortedList = useSelector(sortedListSelector)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   localStorage.clear();
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // });

  const getEntries = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('todos');
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (err) {
    console.log(err)
  }
}

  const setEntries = async (value: Todos) => {
    try {
      // await AsyncStorage.clear()
      await AsyncStorage.setItem("todos", JSON.stringify(todos));
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    dispatch(addState(getEntries))
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
