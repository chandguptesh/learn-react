import React from 'react';

const SearchBox = ({searchChange}) =>{
    return(
        <div className='pa2'>
           <input className = 'pa3 bg-lightest-blue b--green' type='search' placeholder="search robos"
           onChange={searchChange}>
               </input> 
        </div>
    )
}
export default SearchBox;