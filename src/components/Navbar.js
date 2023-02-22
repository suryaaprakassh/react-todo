import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar=({user})=>{
  return(
    <div className="flex justify-between py-10">
      <Link to='/'>Home</Link>
      {!user && (<Link to='/login'>Login</Link>)}
      {user && (<Link to='/tasks'>Tasks</Link>)}
    </div>
  )
}
