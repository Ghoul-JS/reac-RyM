import React from "react";
import style from './styles/Card.module.css';

export default function SearchBar(props) {
   return (
      <div>
         <input className={style.inputSearch} type='search' />
         <button className={style.btnAdd} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
