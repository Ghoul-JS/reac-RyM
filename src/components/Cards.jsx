import React from 'react';
import Card from './Card.jsx';
import style from './styles/Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   return(
      <div className={style.card}>
         {characters.map((elem)=> <Card 
            key={elem.id}
            id={elem.id}
            onClose={() => onClose(elem.id)}
            name={elem.name}
            species={elem.species}
            gender={elem.gender}
            image={elem.image}
         />)}
      </div>
   )
}
