import React from 'react'
import Loady from './Loader.module.css'

const Loader = () => {
  return (
    <div className = {Loady.wrapper}>
       <span className={Loady.loader}> </span> 
    </div>
  )
}

export default Loader