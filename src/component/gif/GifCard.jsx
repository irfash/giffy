import React from 'react'
import { NavLink } from 'react-router-dom'

export const GifCard = ({url ,alt}) => {
  return (
    <div className='gif-card'>
        <NavLink to="/">
             <div className='Gif'>
                <img className='Gif-image' src={`${url}.gif`} alt={alt}
                />
             </div>
         </NavLink>
     </div>
  )
}
