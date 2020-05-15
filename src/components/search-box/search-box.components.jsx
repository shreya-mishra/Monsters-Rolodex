import React from 'react';

import './search-box.styles.css';

//functional component thedont have state 
export const SearchBox = ({placeholder,handleChange}) =>(
<input className='search' type='search' placeholder={placeholder} onChange={handleChange}
      
      />
)