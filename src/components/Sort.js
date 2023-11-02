import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/Filter_context";

const Sort = () => {

  const {filter_products,grid_view,setGridView,setListView,sorting} = useFilterContext();
  
  return (
    <Wrapper className="sort-section">
        
      <div className="sorting-list--grid">
        <button className={grid_view?"active sort-btn": "sort-btn"}
         onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button className={grid_view?"sort-btn": " active sort-btn"}
        onClick={setListView}>
          <BsList className="icon" />
        </button>
      </div>

      <div className="products-data">
        <p>{filter_products.length} total products</p>
      </div>

      <div className="sort-selection">
        <form action="#">
            <label htmlFor="sort"></label>
            <select name = "sort" id = "sort" onClick={sorting} className="sort-selection--style">
                <option value="lowest">Price(lowest)</option>    <option value="#" disabled></option>
                
                <option value="highest">Price(highest)</option>    <option value="#" disabled></option>
            
                <option value="a-z">Price(a-z)</option>    <option value="#" disabled></option>
            
                <option value="z-a">Price(z-a)</option>    <option value="#" disabled></option>
            
            </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

  display: flex;
  justify-content: space-between;
  

  border-radius: 10px;
  border: 1px solid black;
  margin: 1rem 0 3rem 0;
  padding: 1rem;

  
  border:1px solid rgba(256,256,256,0.4);
  
  .products-data p{
    
    color: rgba(256,256,256,0.5);
  }
  @media only screen and (max-width: 700px) 
  {
    display: flex;
    flex-wrap:wrap;
    gap:13px;
        
    .sort-selection .sort-selection--style {
        margin-left: 10rem;
    }
     
  }
  .sorting-list--grid {
        
    color: rgba(256,256,256,0.5);
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
        
    color: rgba(256,256,256,0.5);
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    
    color: rgba(256,256,256,0.5);
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;
