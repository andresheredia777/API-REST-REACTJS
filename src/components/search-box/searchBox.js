import React from 'react'
import './search-box.component.css'
export default function SearchBox(props) {
     return (
          <input
               className='search-box'
               type='search'
               placeholder='search Monsters'
               onChange={props.onSearchChange}

          />
     )
}
