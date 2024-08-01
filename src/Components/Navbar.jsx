import React ,{memo}from 'react'

const Navbar = ({special,getSpecial}) => {
  console.log("clicked")
  return (
    <>  
  <button onClick={()=>{getSpecial()}}>{getSpecial()}</button>
      <div>i am a {special} navbar</div>
</>
  )
}

export default memo(Navbar)