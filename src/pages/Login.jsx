import React from 'react'
import 'styles/estilosLogin.css'

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
                <section class="form-register">
                    <h4>Iniciar sesión</h4>
                    <input class="controls" type="email" name="usuario" id="usuario" placeholder="Ingrese su Usuario"/>
                    <input class="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña"/>
                    <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
                    <input class="botons" type="submit" value="Ingresar"/>
                    <p><a href="#">¿Ya tengo Cuenta?</a></p>
                </section>
            </body>
        </div>
    )
}

export default Login
