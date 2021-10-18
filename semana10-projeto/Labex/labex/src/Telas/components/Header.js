import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
   border: 1px solid black;
   border-radius: 6px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between ;
   padding: 6px;
   background-color: black;
   color: white;

`



const Header = () => {
    return(
        <HeaderContainer>
            <h1>LabeNinjas</h1>
        </HeaderContainer>

    )
}

export default Header;