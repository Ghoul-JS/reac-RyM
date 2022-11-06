import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import style from "./styles/Detail.module.css"

export default function Detail() {
    const { detailId } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch(err => {
                window.alert("Error", err);
           });
        return setCharacter({});
     }, [detailId]);

    return(
        <>
         <h1>{character.name}</h1>
         <div className={style.container}>
               <div className={style.details}>
                  <img src={character.image} alt="" />
               </div>
               
               <div className={style.detailsTxt}>
                  <h2>Status: {character.status}</h2>
                  <h2>Created: {character.created}</h2>
                  <h2>Gender: {character.gender}</h2>
                  <h2>Origin: {character.origin?.name}</h2>
               </div>    
         </div>  
        </>
    )
}