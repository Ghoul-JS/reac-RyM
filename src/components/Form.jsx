import React from 'react';
import style from './styles/Form.module.css'
import validation, {} from './validation.js'


export default function Form(props) {

    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = React.useState({
        username: "",
        password: ""
    });

    const handleInputChange = (e) => {
        setUserData({
            ...userData, 
            [e.target.name]: e.target.value
        })

        setErrors(
            validation({
               ...userData,
               [e.target.name]: e.target.value
            })
         );
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.login(userData)
    }

    return(
        <div className={style.loginPage}>
            <div className={style.form}>
                <form className={style.loginForm} onSubmit={handleSubmit}>
                    <input 
                    className={errors.username && style.warning}
                    type="text" 
                    placeholder="email" 
                    name="username" 
                    value={userData.username} 
                    onChange={handleInputChange}/>
                    <p className={style.danger}>{errors.username}</p>

                    <input
                    className={errors.password && style.warning}
                    type="text" 
                    placeholder="password" 
                    name="password" 
                    value={userData.password} 
                    onChange={handleInputChange}/>
                    <p className={style.danger}>{errors.password}</p>
                    <button type='submit'>login</button>
                </form>
            </div>
        </div>
    )
}