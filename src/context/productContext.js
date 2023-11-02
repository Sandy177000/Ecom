import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer"

export const AppContext = createContext(); // create a context

const API = "https://api.pujakaitem.com/api/products"; // source of the data


// initial state of the data
const initialState = {
    isLoading: false,
    products: [],
    featuredProducts : [],

}

// deliever the values to the children components to access them

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  // reducer is a function which sets data to state variable


  // get data from api
  const getProducts = async (url) => {
    
    dispatch({type:"SET_LOADING"}); // sets page as loading

    try{        
        const response = await axios.get(url); // returns a promise
        const products = response.data;
        dispatch({type:"SET_API_DATA", payload: products}); // sets data in state
    }
    catch(err){
        dispatch({type:"API_ERROR"}); //sets page as error found
    }

  };

  // call getProducts function whenever the page reloads
  useEffect(() => {
    getProducts(API);
  }, []);

  return <AppContext.Provider value={{...state}}> {children} </AppContext.Provider>;

};

// use the context created

export const useProductContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
