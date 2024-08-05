"use client"

import React from 'react'

export default function Button({children}) {

   function handleClick()
   {
    alert('Button clicked');
   }  

  return (
    <button onClick={handleClick}>
        {children}
    </button>
  )
}
