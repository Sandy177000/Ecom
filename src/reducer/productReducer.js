
const ProductReducer = (state,action) =>{

    if(action.type==="SET_LOADING"){
        return{
            ...state,
            isLoading:true
        };
    }
    if(action.type==="API_ERROR"){
        return{
            ...state,
            isLoading:false,
            isError:true,
        }
    }
    if(action.type==="SET_API_DATA"){
        
        // extracting featured data
        const featureData = action.payload.filter((currEle)=>{
            return currEle.featured === true;
        })

        return{
            ...state,
            isLoading:false,
            products:action.payload,
            featuredProducts: featureData
        }
    }

    return state;
};

export default ProductReducer;