import React from 'react'
import "../../scss/Image.scss"
export const Image = (item,key) => {
    return (
   
   
   
   
   <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.item.itemurl}.gif)`,
          backgroundSize :"auto"
        }}
      />
    </div>
  )
}
