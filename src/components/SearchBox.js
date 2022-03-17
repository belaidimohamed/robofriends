import React from 'react'

function SearchBox({searchChange}) {
  return (
    <input  
    className='pa3 mb4 ba br3 b--green bg-lightest-blue'
    type='search' 
    placeholder='search robots'
    onChange={(searchChange)} />
  )
}

export default SearchBox