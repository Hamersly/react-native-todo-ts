import styled from "styled-components/native";

export const Wrapper = styled.Pressable`
  display: flex;
  padding: 15px;

`;

export const TaskText = styled.Text<{ completed: string }>`
  word-break: break-word;
  white-space: pre-line;
  hyphens: auto;
  font-size: 20px;
  color: #141823;
  ${props => props.completed};
`;