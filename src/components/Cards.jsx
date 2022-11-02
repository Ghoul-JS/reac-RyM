import React from 'react';
import Card from './Card';
import style from './styles/Card.module.css';

export default function Cards(props) {
   const { characters } = props;
   return(
      <div className={style.card}>
         {characters.map(elem => <Card 
            onClose={() => window.alert('Emulamos que se cierra la card')}
            name={elem.name}
            species={elem.species}
            gender={elem.gender}
            image={elem.image}
         />)}
      </div>
   )
}
