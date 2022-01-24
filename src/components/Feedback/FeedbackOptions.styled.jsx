import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 15px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #a9a9a9;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 7px;
  }
`;
