import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";

const Products = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div className="filter">
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
        
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

  .container {
    
    overflow: hidden;
  }
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  .product-view--sort{
    width: 100%;
    padding:1rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
