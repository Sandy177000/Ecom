import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/Filter_context";

const FilterSection = () => {
  const {
    filters: { text, maxPrice, minPrice },
    all_products,
    updateFilterValue,
  } = useFilterContext();

  console.log(maxPrice);

  // to render the options of filters available from data
  const getUniqueData = (data, prop) => {
    let newVal = data.map((curr) => {
      return curr[prop];
    });

    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoryOnlyData = getUniqueData(all_products, "category");

  const companyOnlyData = getUniqueData(all_products, "company");

  return (
    <Wrapper className="wrap">
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="search"
            onChange={updateFilterValue}
          />
        </form>
      </div>
      
      <div className="shape"></div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((curr, idx) => {
            return (
              <button
                key={idx}
                type="button"
                value={curr}
                name="category"
                onClick={updateFilterValue}
              >
                {curr}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="compnay"
            className="filter-company--select"
            onClick={updateFilterValue}
          >
            {companyOnlyData.map((curr, id) => {
              return (
                <option value={curr} name="company">
                  {curr}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  align-items: center;
  overflow: hidden;
  color: rgba(256, 256, 256, 0.4);
  border: 1px solid rgba(256, 256, 256, 0.4);
  border-radius: 10px;
  margin: 9rem 0 0 0;
  background-image: linear-gradient(rgba(256, 256, 256, 0.15), rgba(256, 256, 256, 0),rgba(256, 256, 256, 0.03));

  @media only screen and (max-width: 600px) {
    margin: 2rem 0 0 0;
    height: fit-content;
  }

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: rgba(256, 256, 256, 0.4);
    
    background-color: transparent;

    form{
      
    background-color: transparent;
    }
    input {
      background-color: transparent;

      color: rgba(256, 256, 256, 0.5);
      padding: 0.6rem 3rem;
      border-radius: 10px;
      border: 1px solid rgba(256, 256, 256, 0.4);
    }
  }

  .filter-category {
    
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: column;
h3{
  
  background-color: transparent;
}

    div {
      display: flex;
      
    background-color: transparent;
      flex-direction: column;
      gap: 1.4rem;

      button {
        color: rgba(256, 256, 256, 0.2);
        background-color: transparent;
        text-transform: capitalize;
        cursor: pointer;
        border-radius: 10px;
        width: 20rem;
        border: 1px solid black;
        transition: all 0.6s;

        &:hover {
          transform: scale(1.1);
        }
      }

      .active {
        border-bottom: 1px solid #000;
      }
    }
  }

  .filter-company {
    h3{
  
      background-color: transparent;
    }
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 2rem;
  }
  .filter-company--select {
    color: rgba(256, 256, 256, 0.4);
    width: 25rem;
    border-radius: 10px;
    border: 1px solid rgba(256, 256, 256, 0.4);
    padding: 0.3rem 5rem;
    font-size: 1.6rem;
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }

    @media (max-width: 600px) {
      background-color: orange;
    }
  }
`;

export default FilterSection;
