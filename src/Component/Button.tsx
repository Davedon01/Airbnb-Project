import React from 'react'


interface Btnprops{
  btntext: string;
  btnStyle: string;
}

function Button({btntext, btnStyle}:Btnprops) {
  return (
   <button className={`${btnStyle} p-2 font-normal`}>{btntext}</button>
  )
}

export default Button