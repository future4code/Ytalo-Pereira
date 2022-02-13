import styled from "styled-components";


//styled de Produtos
export const ProductsContainer = styled.div`
   font-family: 'Open Sans Condensed', sans-serif;

`;

export const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-family: 'Open Sans Condensed', sans-serif;
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap:15px;
  width: 200px;
  padding: 10px;
  margin: 0;
`

export const Label = styled.label`
   display: flex;
   align-items: center;
   gap: 15px;
 
`

//ProductCard

export const CardContainer = styled.div`
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  h3 {
    margin: 4px 0;
  }
`

export const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
`

export const Img = styled.img`
    border-radius: 30%;
    width: 150px;

`