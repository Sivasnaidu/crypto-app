import React from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {

  const handleChange = ()=> {
    
  }
  return (
    <div className='head'>
<header>
      <div className="header-cont">
        <h1>Crypto App</h1>
        <div className="search-bar">
        {/*<input type='text' placeholder='search' onChange={handleChange}/>
         <SearchIcon/>  */}
        </div>
      </div>
      </header>
    </div>
  )
}

export default Header;