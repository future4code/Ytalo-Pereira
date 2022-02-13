import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 10px;
  gap: 5px;

`;

export const MainTitle = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top: 0;
     font-family: 'Open Sans Condensed', sans-serif;
     gap: 10px;
     margin-top: 10px;
     margin-bottom: 20px;
     
     

`


export const Img = styled.img`
     
     width: 60px;


`

export const ContainerReset = styled.div`
     
     *{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       font-family: 'Open Sans Condensed', sans-serif;
     }

     background-color:#e0f2f1;

     


`

