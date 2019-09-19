import styled from "styled-components"

interface TextInputProps {
    disabled?: boolean
}

export const TextInput = styled.input<TextInputProps>`
  border: none;
  border-bottom: 1px solid black;
  display: block;
  margin: 15px;
  text-align: center;
  text-transform: capitalize;
  padding: 5;
  width: 150px;
  height: 20px;
  outline: none;
 
`;

