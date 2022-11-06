import React from "react"
import SearchBar from "./SearchBar.jsx"
import style from "./styles/Nav.module.css"
import {Link} from "react-router-dom"

export default function Nav(props){
    return(
        <div className={style.containerNav}>
            <div className={style.linksNav}>
                <div className={style.link}> 
                    <Link to="/home">Home</Link>
                </div>
                <div className={style.link}>
                    <Link to="/about">About</Link>
                </div>
            </div>
            
            <div>
                <SearchBar onSearch={props.onSearch}/>
            </div>
        </div>   
    )
}