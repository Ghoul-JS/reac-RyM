import React from "react";
import style from './styles/Card.module.css';

export default function Card(props) {
   return (
      <div className={style.border}>
         <button className={style.btn} onClick={() => props.onClose(props.id)}>X</button>
         <h2 className={style.txt}>{props.name}</h2>
         <h2 className={style.txt}>{props.species}</h2>
         <h2 className={style.txt}>{props.gender}</h2>
         <img src={props.image} alt="imagen" />
      </div>
   );
}
