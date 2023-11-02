const filteReducer = (state,action)=>{


    if(action.type==="LOAD_FILTER_PRODUCTS"){

        let price = [];

        let temp = [...action.payload]

        temp.forEach(element => {
            price.push(element?.price)
        });

        const max = Math.max(...price);
        const min = Math.min(...price);
        


        return{
            ...state,
            filter_products: [...action.payload],
            all_products: [...action.payload],
            filters:{
                ...state.filters,
                maxPrice:max,
                minPrice:min,
            }
            
        }
    }

    if(action.type==="SET_GRID_VIEW"){
        return{
            ...state,
            grid_view:true,
        }
    }
    
    if(action.type==="SET_LIST_VIEW"){
        return{
            ...state,
            grid_view:false,
        }
    }

    if(action.type==="GET_SORT_VALUE"){
        let userSortValue = document.getElementById("sort");
        let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
        console.log(sort_value);
        return{
            ...state,
            sorting_value:sort_value,
        }
    }

    if(action.type==="SORTING_PRODUCTS"){

        let newSortData;
        let tempSortProduct = state.all_products;
        
        console.log(typeof(tempSortProduct))

        if(state.sorting_value==="a-z"){
            newSortData = tempSortProduct.sort((a,b)=>{
               return a.name.localeCompare(b.name);
            })
        }
        
        if(state.sorting_value==="z-a"){
            newSortData = tempSortProduct.sort((a,b)=>{
               return b.name.localeCompare(a.name);
            })
        }
        if(state.sorting_value==="highest"){
            newSortData = tempSortProduct.sort((a,b)=>{
               return b.price - a.price;
            })
        }
        if(state.sorting_value==="lowest"){
            newSortData = tempSortProduct.sort((a,b)=>{
               return a.price - b.price;
            })
        }

    
        return{
            ...state,
            filter_products:newSortData,
        }
    }

    if(action.type==="UPDATE_FILTERS_VALUE"){

        const {name, value} = action.payload;
        
        return{
            ...state,
            filters:{
                ...state.filters,
                [name]:value
            }
        }
    }

    if(action.type==="FILTER_PRODUCTS"){
        
        let {all_products} = state;

        let tempFilterProduct = [...all_products];
        
        const {text,category,company} = state.filters;

        if(text){
            tempFilterProduct = tempFilterProduct.filter((curr)=>{
                 return curr.name.toLowerCase().includes(text);
            })
        
            
        }

        if(category!="All"){
            console.log(category)
            tempFilterProduct = tempFilterProduct.filter((curr)=>{
                return curr.category===(category);
           })
        }

        if(company!="All"){
            console.log(company)
            tempFilterProduct = tempFilterProduct.filter((curr)=>{
                return curr.company===(company);
           })
        }
        

        return{
            ...state,
           filter_products: tempFilterProduct
       }
    }

    
    


    return state;
}

export default filteReducer