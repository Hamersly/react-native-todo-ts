import {filterAll, filterIsCompleted, filterIsNotCompleted} from "../../store/todoLayer/slice";
import {useDispatch, useSelector} from "react-redux";
import {FilterButton, Filters} from "./FilterBlock.styled";
import {flagSelector} from "../../store/todoLayer/selectors";
import {FC} from "react";
import {Text} from "react-native";

export const FilterBlock: FC = () => {
  const flag = useSelector(flagSelector)
  const dispatch = useDispatch()

  const flagCompleted = (): string => {
    if (flag === "FILTER_IS_COMPLETED") return "red"
    return "silver"
  }

  const flagAll = () => {
    if (flag === "FILTER_ALL") return "red"
    return "silver"
  }

  const flagNotCompleted = () => {
    if (flag === "FILTER_IS_NOT_COMPLETED") return "red"
    return "silver"
  }

  return (
    <Filters>
      <FilterButton
        onPress={() => dispatch(filterIsCompleted())}
        color={flagCompleted()}
      >
        <Text style={{fontSize: 18}}>Сделано</Text>
      </FilterButton>

      <FilterButton
        onPress={() => dispatch(filterAll())}
        color={flagAll()}>
        <Text style={{fontSize: 18}}>Всё</Text>
      </FilterButton>

      <FilterButton
        onPress={() => dispatch(filterIsNotCompleted())}
        color={flagNotCompleted()}>
        <Text style={{fontSize: 18}}>Ожидает</Text>
      </FilterButton>
    </Filters>
  )
};