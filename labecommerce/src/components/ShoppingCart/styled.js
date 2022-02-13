import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  border: 1px solid transparent;
  padding: 8px;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`

export const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 2px;
  align-items: center;

  p {
    margin: 0;
  }
`

export const Centralize = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;

`
export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;


`
export const Button = styled.button`

color:#3F51b5;
padding-left: 20px;
padding-right: 20px;
border: 1px solid #3F51b5;
border-radius: 10px;
font-size: 15px;
`