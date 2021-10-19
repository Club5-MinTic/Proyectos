import React from 'react'
import 'styles/estilosLogin.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div >
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <title>Iniciar sesión</title>
            </head>
            <body className='background'>
                <section className="form-register">
                    <h4>Iniciar sesión</h4>
                    <input className="controls" type="email" name="usuario" id="usuario" placeholder="Ingrese su Usuario"/>
                    <input className="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña"/>
                    <Link to='/registroProductos'>
                        <input className="botons" type="submit" value="Ingresar"/>
                    </Link>
                </section>
            </body>
        </div>
    )
}

export default Login
