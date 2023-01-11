import React  from 'react'
import { useState } from 'react'
const Trik = ({title,discription}) => {
const[show,setshow]=useState(false)

  return (
    <>
    <div className="que">
      <div className='titl'>
        <button className='btn' onClick={()=>setshow(!show)}>  {show ?"-":"+"} </button>
        <p>{title}</p>
      </div>
     <div className='disc'>{show && <p>{discription}</p>}</div>
    </div>
      
    </>
  )
}

export default Trik
