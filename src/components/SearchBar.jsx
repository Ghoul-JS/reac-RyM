import style from './styles/SearchBar.module.css';
import React, { useState } from "react";

export default function SearchBar(props) {
   
   const [character, setCharacter] = useState("")

   const handleInputChange = (evento) => {
      setCharacter(evento.target.value)
   }
   
   return (
      <div>
         <input 
         className={style.inputSearch}
         type='search'
         value={character} 
         onChange={handleInputChange}
         />
         <button className={style.btnAdd} onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
