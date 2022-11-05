import styled from 'styled-components';

export const Button = styled.button`
  padding: 6px;
  font-size: 15px;
  border: 1px solid black;
  margin: 5px 5px;
  :hover,
  :focus {
    color: blue;
    box-shadow: 3px 3px 3px gray;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
