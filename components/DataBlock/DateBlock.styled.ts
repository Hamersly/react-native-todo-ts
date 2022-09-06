import styled from "styled-components/native";

export const Block = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  padding: 10px;
`;

export const Date = styled.Text`
  flex: 2;
  color: orange;
  margin: 15px 0 5px 15px;
  text-shadow: 1px 1px 2px black;
  font-size: 18px;
`;

export const DateBlockButton = styled.Pressable<{ color: string }>`
  background-color: ${props => props.color};
  padding: 4px 8px;
  border-radius: 30px;
  elevation: 1;
`;
