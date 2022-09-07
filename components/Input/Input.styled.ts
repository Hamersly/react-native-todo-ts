import styled from "styled-components/native";

export const InputBlock = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 0 10px 0 10px;
  align-items: center;
`;

export const StyledInput = styled.TextInput`
  width: 85%;
  padding: 10px 15px;
  border-radius: 30px;
  background-color: silver;
`;

export const AddButton = styled.Pressable`
  background-color: silver;
  padding: 3px 6px;
  border-radius: 30px;
`;
