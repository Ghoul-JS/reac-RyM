import React from "react"
import style from "./styles/Favorites.module.css"
import { connect, useDispatch} from "react-redux"
import { filterCard, orderCards } from "../redux/actions.js"

const Favorites = ({myFavorites}) => {   
    const dispatch = useDispatch();

	const handleOrder = (e) => {
		dispatch(orderCards(e.target.value));
	}

    const handleFilter = (e) => {
		dispatch(filterCard(e.target.value));
	}

    return (
        <div>
            <div className={style.seccionOption}>
				<select className={style.orderList} name="order" onChange={handleOrder}>
					<option className={style.optionList} value="default" disabled>Select...</option>
					<option className={style.optionList} value="Ascendente">Ascendente</option>
					<option className={style.optionList} value="Descendente">Descendente</option>
				</select>

				<select className={style.orderList} name="gender" onChange={handleFilter}>
					<option className={style.optionList} value="default" disabled>Select...</option>
					<option className={style.optionList} value="All">All</option>
					<option className={style.optionList} value="Male">Male</option>
					<option className={style.optionList} value="Female">Female</option>
					<option className={style.optionList} value="Genderless">Genderless</option>
					<option className={style.optionList} value="unknown">Unknown</option>
				</select>
			</div>
            <div className={style.card}>
                {
                myFavorites?.map(elem => 
                    <div key={elem.id} className={style.border}>
                        <h1 className={style.name}>{elem.name}</h1>
                        <img src={elem.image} alt={elem.name}/>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps)(Favorites)