import React  from "react";
import styled from "styled-components";
import { useProductContext } from "./context/productContext";
import Products from "./Products";


const Home = () => {

    return <Wrapper> 
        <Products/>
    </Wrapper>
};

const Wrapper = styled.section`
    position:relative;
    display:flex;
    justify-content:space-evenly;
    background-color:rgba(0,0,4,1);
    

`;

export default Home;
