import { useState, useEffect } from 'react'

import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({category}) => {
  
  const [ images, setImages ] = useState([])
  
  const getImages = async() => {
    const newImages = await getGifs( category )
    setImages(newImages)
  }
  
  useEffect(() => {
    getImages()
    return
  }, [])
  
  return (
    <div className="py-4">
      <h3 className="font-bold text-xl">{category}</h3>
      <div className="py-4 flex flex-col gap-4">
      {
        images.map((images) => {
          return (
              <GifItem
                key={images.id}
                {...images}
              />
            )
        })
      }
      </div>
    </div>
    )
}