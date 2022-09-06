import {Block, Buttons, Date, DateBlockButton} from "./DateBlock.styled";
import {useDispatch} from "react-redux";
import {removeTask} from "../../store/todoLayer/slice";
import {FC} from "react";
import {Text} from "react-native";

interface Props {
  change: boolean
  date: string
  id: number

  changeValueTodo(id: number, value: string, text?: string): void
}

export const DateBlock: FC<Props> = ({change, date, id, changeValueTodo}) => {
  const dispatch = useDispatch()

  const changeColor = (): string => {
    if (change) return "red"
    return "silver"
  }

  return (
    <Block>
      <Date>{date}</Date>
      <Buttons>
        <DateBlockButton
          onPress={() => changeValueTodo(id, 'change')}
          color={changeColor()}
        >
          <Text style={{fontSize: 15}}>ред.</Text>
        </DateBlockButton>
        <DateBlockButton
          onPress={() => dispatch(removeTask(id))}
          color={'silver'}
        >
          <Text style={{fontSize: 15}}> X </Text>
        </DateBlockButton>
      </Buttons>
    </Block>
  )
}
