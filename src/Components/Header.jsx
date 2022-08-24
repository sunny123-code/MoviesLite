import React from 'react'

function Header() {
  return (
      <>
       <h1 onClick={()=> window.scroll(0,0) }  className='heading'>Movies Lite 🍿</h1>
      </>
  )
}

export default Header;