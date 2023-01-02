import React, {useState, useEffect} from "react";
import style from './styles/Card.module.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavoriteChar, removeFavoriteChar } from '../redux/actions';

function Card(props) {
   const { addFavoriteChar, removeFavoriteChar, id, myFavorites } = props
   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if(isFav === true) {
         setIsFav(false)
         removeFavoriteChar(id)
      }
      if(isFav === false) {
         setIsFav(true)
         addFavoriteChar(props)
      }
   }

   return (
      <div className={style.border}>
         <div className={style.mainBtn}>
            <button className={style.btn} onClick={() => props.onClose(props.id)}>X</button>
            {
               isFav ? (
                  <button className={style.btnFav} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={style.btnFav} onClick={handleFavorite}>🤍</button>
               )
            }
         </div>
         
         <Link to={`/detail/${props.id}`}>
            <img className={style.imgCard} src={props.image} alt="imagen" />
            <h2 className={style.txt}>{props.name}</h2>
            <h2 className={style.txt}>{props.species}</h2>
         </Link>
      </div>
   );
}



export function mapDispatchToProps(dispatch) {
   return {
      removeFavoriteChar: (id) => dispatch(removeFavoriteChar(id)),
      addFavoriteChar: (character) => dispatch(addFavoriteChar(character)),
   }
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
 }
 
export default connect(mapStateToProps, mapDispatchToProps)(Card);