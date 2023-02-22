import React from 'react'
import {auth} from '../config/firebase.js'
import {signOut} from "firebase/auth"
export const Home=({user})=>{
  async function logout(){
    await signOut(auth)
  }
  return(
    <div className="font-medium flex-col items-center">
      <h3 className="text-center">This is Home Page</h3>
      {user &&
      (
      <div className="p-6 max-w-sm mx-auto my-10 bg-gray-200 rounded-xl flex items-center space-x-4">
      <img className="rounded-full" src={user?.photoURL || ""} width="75" height="75"/>
      <div>
      <p className="text-xl">{user?.displayName}</p>
      <p className="text-gray-700">Hello !</p>
      </div>
      <button  className="w-50 h-10 bg-cyan-500 text-white rounded-lg px-3" onClick={logout}>Logout</button>
      </div>
      )}
    </div>
  )
}
