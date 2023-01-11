import React from 'react'
import Data from './Data'
import Trik from './Trik'
const App = () => {
  return (
    <>
   
    <div className="accordian">
    <div className='hdr'>Accordian App</div>
     {
      Data.map((value)=>{
       return(
         <>
      
          <Trik 
            key={value.id}
            title={value.title}
            discription={value.discription}
          />
         </>
       )

      })
     }
    </div>
     
   
    </>
  )
}

export default App
