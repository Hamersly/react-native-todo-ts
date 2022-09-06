import styled from "styled-components/native";

export const Filters = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
`;

export const FilterButton = styled.Pressable<{ color: string }>`
  background-color: ${props => props.color};
  padding: 10px;
  border-radius: 30px;
  elevation: 1;
`;