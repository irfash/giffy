import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GifFeatured } from '../features/gifFeatured/GifFeatured'
import { GifTrend } from '../features/gifTrend/GifTrend'
import { getGifTrend } from '../features/gifTrend/gifTrendSlice'

export const Home = () => {
  return (
    <div className="container ">
      <GifTrend />
      <GifFeatured /> 
      </div>
  )
}
