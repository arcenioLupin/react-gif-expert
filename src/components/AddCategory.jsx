import { useState } from "react";

export const AddCategory = ({ onNewCategory}) => {
 const [inputValue, setInputValue] = useState('');

 const handleCategory = ({target}) => {
    setInputValue(target.value)
  }

const onSubmit = (event) => {
event.preventDefault();
if(inputValue.trim().length <=1) return;
// setCategories( categories =>[inputValue,...categories])
onNewCategory(inputValue.trim());
setInputValue('');
}  

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={inputValue} placeholder="Ingresa nombre de categoría"  onChange={handleCategory}/>
    </form>
    
  )
}
