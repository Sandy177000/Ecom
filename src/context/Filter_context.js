import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "All",
    company: "All",
    maxPrice: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {

  const { products } = useProductContext(); // fetching data from products context

  const [state, dispatch] = useReducer(reducer, initialState);
  

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  //searching implementation
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value; // text in the search input

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  // displaying sorted products when sorting-value selected value or search text is changed
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [products, state.filters]);

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value]);

  //load data into filter products from products context if products are changed
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);



  

  // providing the context to the children components
  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, 
              sorting, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
