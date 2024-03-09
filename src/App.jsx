import { useState } from "react"

import {
  AddCategory,
  GifGrid
} from './components'

const App = () => {
  
  const [ categories, setCategories ] = useState([])
  
  const onAddCategory = (newCategory) => {
    
    if (categories.includes(newCategory)) return;
    
    setCategories([newCategory, ...categories])
  }
  
  return (
    <div className="px-8">
    
    {/* hero */}
    <h1>GiFo</h1>
    
    {/* input */}
    
    <AddCategory 
      onNewCategory={onAddCategory}
    />
    
    {/* listado de componentes */}
    
    
    
    <ul>
      {
        categories.map((category) => {
          return (
            <GifGrid 
              key={category}
              category={category}
            />
          )
        })
      }
    </ul>
    </div>
    )
}

export default App