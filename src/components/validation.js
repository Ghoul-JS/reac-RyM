export default function validation(userData){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexNum = /\d/;
    const errors={}

    if (!regexEmail.test(userData.username))errors.username = 'No es un correo válido'; 
           
    if (!userData.username) errors.username = 'Se requiere un correo';
        
    if(userData.username.length > 35) errors.username = 'Mínimo 35 caracteres'
        
    if(!regexNum.test(userData.password)) errors.password = 'Almenos un número'     
 
    if(userData.password.length < 6 || userData.password.length > 10) errors.password = 'Alemnos 6 y 10 caracteres.'
 
    return errors;
}
