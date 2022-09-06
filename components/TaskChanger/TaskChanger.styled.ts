import styled from "styled-components/native";

export const Changer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 15px 0;
`;

export const SaveButton = styled.Pressable`
  margin: 15px 0 0 0;
  padding: 10px;
  border-radius: 30px;
  elevation: 1;
`;

export const ChangeText = styled.TextInput`
  margin: 15px 15px 0 15px;
  padding: 5px;
  background-color: #a9a9a9;
  width: 95%;
  font-size: 20px;
`;