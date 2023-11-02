import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  

  return ( 
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {
         products.map((currElem, id) => {
          return (
            <Product currElem={currElem} id={id}/>
          );
        })}
      </div>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    img {
      border:10px;
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {

    border-radius: 2rem;
    border: 1px solid rgba(256,256,256,0.6);
    height:300px;
    .card-data {
      padding: 0 1rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-data--price {
      color: rgba(256,256,256,0.2);
    }

    h3 {
      color: rgba(256,256,256,0.6);;
      text-transform: capitalize;
      
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default GridView;
