import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
  
  const [ inputValue, setInputValue ] = useState('')
  
  const [ isError, setIsError ] = useState(false)
  
  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim().length <= 1) {
      setIsError(true)
      setInputValue('')
      return
    };
    
    onNewCategory(inputValue.trim())
    setInputValue("")
  }
  
  return(
    <form onSubmit={onSubmit}>
      {
        isError && 
        <h3 className="text-red-400">Tienes que agregar mas de un caracter</h3>
      }
      <input
        className="p-2"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={onInputChange}
      />
      <button className="p-2 border border-black rounded">Agregar</button>
    </form>
    )
}