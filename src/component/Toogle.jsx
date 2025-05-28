import React, { useContext } from 'react'
import { Context } from '../provider/AuthProvider'
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg"

const Toogle = () => {
    let {darkmode, handleMode}= useContext(Context)
  return (
    <div>

         <button onClick={handleMode} className="absolute top-96 right-10 text-3xl ">
                {
                  darkmode ? <li><img src={sun}></img></li>:<li><img src={moon}></img></li>
                }
               </button>
    </div>
  )
}

export default Toogle