import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  margin: 0 16px 0 0;
  padding: 10px;
  border: 1px solid black;
  :hover {
    background-color: #fff8dc;
  }
  :last-child {
    margin: 0 0 0 0;
  }
`;
