import React from 'react'
import styled from "styled-components";

const Pagination = ({totalPosts,postsPerPage ,setCurrentPage}) => {

 let pages = [];

 for(let i = 1;i<= Math.ceil(totalPosts/postsPerPage);i++){
     pages.push(i);
 }
  return (
      <Wrap>
         <div className='buttons'>
            {
                pages.map((page,index)=>{
                    return <button key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
                })
            }
          </div>
      </Wrap>
  )
}

const Wrap = styled.section`

position:relative;

top: -4rem;
.buttons{
    
    width: 20rem;
    height:2rem;
    margin: auto;
    display:flex;
}
button{  
  color: rgba(256,256,256,0.8);
  border-radius: 10px;
  width:5rem;
  height: 5rem;
  margin:4px;
  background-color:transparent;


}
`


export default Pagination
