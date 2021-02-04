import React from 'react'
import styled from 'styled-components';

const Navbar = () => {
    return <Container>
        <h1>Im the navbar</h1>
    </Container>
}

const Container = styled.div `
width: 100vw;
height: 50px;
background-color: lightseagreen;
display: flex;
flex-direction: column;
align-items: center;
`

export default Navbar;