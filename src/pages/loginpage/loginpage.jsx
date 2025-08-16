import './loginpage.css'
import { useState } from "react";
import Swal from 'sweetalert2';


function LoginPage() {
    // Codigo de JS
    const [username, setUsername] = useState('')
    function handleLoginClick(){
        if (username.trim() === '') {
            Swal.fire("Por favor ingrese un nombre válido")
        }
        else {
            Swal.fire(username)
        }
    }
    // Etiquetas de HTML
    return (
        <div className='login-container'>
            <h2>EJERCICIO DE PRUEBA</h2>
            <input type="text"
                placeholder='Escriba su usuario'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLoginClick}>Iniciar sesión</button>
        </div>
    );
}

export default LoginPage;