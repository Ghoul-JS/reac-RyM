import './App.css'
import React, { useState } from 'react'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import style from '../src/components/styles/Nav.module.css'

function App () {

  const [characters, setCharacters] = useState([])

  const onSearch = character => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             console.log('No hay personajes con ese ID');
          }
    });
  }

  const onClose = id => {
    setCharacters(oldChars => oldChars.filter(ch => ch.id !== id));
  }
  
  return (
      <div className='App' style={{ padding: '25px' }}>
        <div className={style.containerNav}>
          <Nav onSearch={onSearch}/>
        </div>
        <div>
          <Cards onClose={onClose} characters={characters}/>
        </div>
    </div>
  )
}

export default App
