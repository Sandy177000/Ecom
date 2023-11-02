import React, { useState } from "react";
import { useFilterContext } from "../context/Filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import Pagination from "./Pagination";
import styled from "styled-components";

const ProductList = () => {
  // get data
  const { filter_products, grid_view } = useFilterContext();

  // pagination logic
  const [currPage, setcurrPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(4); // change this to vary the items per page

  const lastPostIndex = currPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const curr = filter_products.slice(firstPostIndex, lastPostIndex);

  if (grid_view === true) {
    return (
      <Wrapper>
        <GridView products={curr} />
        <Pagination
          totalPosts={filter_products.length}
          setCurrentPage={setcurrPage}
          postsPerPage={postPerPage}
        />
      </Wrapper>
    );
  }

  if (grid_view === false) {
    return (
      <Wrapper>
        <ListView products={curr} />
        <Pagination
          totalPosts={filter_products.length}
          setCurrentPage={setcurrPage}
          postsPerPage={postPerPage}
        />
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`

  border-radius: 10px;
  padding: 0 2rem;
  height: fit-content;
  position: relative;
  border: 1px solid rgba(256, 256, 256, 0.4);

  .shape {
    position: absolute;
    top: -100px;
    background-color: rgba(256, 256, 256, 1);
    width: 50%;
    height: 100px;
    z-index: 10;
    border-radius: 50%;
    filter: blur(1000px);
  }
`;

export default ProductList;
