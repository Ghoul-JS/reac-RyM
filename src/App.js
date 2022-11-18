import './App.css'
import React, { useState, useEffect } from 'react'
import Form from './components/Form.jsx'
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Favorites from './components/Favorites.jsx'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"

function App () {

  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)

  const navigate = useNavigate();
  const location = useLocation();

  const username = 'ejemplo@gmail.com';
  const password = '1password';

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
    } else {
      alert("Datos invalidos")
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const onSearch = character => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
    });
  }

  const onClose = id => {
    setCharacters(oldChars => oldChars.filter(ch => ch.id !== id));
  }
  
  return (
      <div className='App' style={{ padding: '25px' }}>
        {location.pathname === "/" ? null : <Nav onSearch={onSearch}/>}
        <Routes>
            <Route path="/" element={<Form login={login}/>} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />  
            <Route path="/about" element={<About />} />
            <Route path='/detail/:detailId' element={<Detail />} />
        </Routes> 
    </div>
  )
}

export default App
