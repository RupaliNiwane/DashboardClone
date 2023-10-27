import React from 'react'

import
{ BsBellFill,BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify}
from 'react-icons/bs';

function Header({OpenSideBar}) {
  return (
    <header className='header'>
    <div className='menu-icon'>
       <BsJustify className = 'icon' onClick={OpenSideBar}/>  
    </div>
    <div className='header-left'>
        <BsSearch className='icon'/>
    </div>
    <div className='header-right'>
      <b>Sing  in </b>
        <BsBellFill classname='icon'/>
        <BsFillEnvelopeFill className='icon'/>
        <BsPersonCircle className='icon'/>
    </div>
    </header>
  )
}

export default Header;
