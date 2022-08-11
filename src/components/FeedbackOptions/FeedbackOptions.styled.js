import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ade6da;
  box-shadow: 0px 0px 5px black;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  &:active {
    box-shadow: inset 0px 0px 5px black;
  }
`;
