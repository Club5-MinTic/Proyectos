import React from 'react'
import photo from 'media/photo.png'
import simbolo from 'media/simbolo.png'
import 'styles/estilos.css'
import './contraerMenu.js'
importScripts 

const Sidebar = () => {
    return (
        <div>
            <div id="sidemenu" class="menu-collapsed">
            
                {/* ENCABEZADO */}
                <div id="header">
                    <div id="title"><span>Menú</span></div>
                    <div id="menu-btn">
                        <div class="btn-hamburger"></div>
                        <div class="btn-hamburger"></div>
                        <div class="btn-hamburger"></div>
                    </div>
                </div>
            
            {/* <!-- PERFIL --> */}
            <div id="profile">
                <div id="photo"><img src={photo} alt=""/></div>
                <div id="name"><span>Bienvenidos</span></div>
            </div>

            {/* <!-- ELEMENTOS --> */}
            <div id="menu-items">
                <div class="item">
                    <a href="index.html">
                        <div class="icon"><img src={simbolo} alt=""/> </div> 
                        <div class="title"><span>Inicio</span></div>
                    </a>
                </div>

                <div class="item separator">     
                </div>

                <div class="item">
                    <a href="gestionVentas.html">
                        <div class="icon"><img src={simbolo} alt=""/> </div> 
                        <div class="title"><span>Información de Ventas</span></div>
                    </a>
                </div>

                <div class="item separator">     
                </div>


                <div class="item">
                    <a href="gestionProductos.html">
                        <div class="icon"><img src={simbolo} alt=""/> </div> 
                        <div class="title"><span>Gestión de productos</span></div>
                    </a>
                </div>

                <div class="item separator">     
                </div>


                <div class="item">
                    <a href="gestionUsuarios.html">
                        <div class="icon"><img src={simbolo} alt=""/> </div> 
                        <div class="title"><span>Gestión de Usuarios y Roles</span></div>
                    </a>
                </div>
        


            </div>

            <div id="main-container">
                {/* <!-- Bienvenidos a Komuya --> */}
            </div>

            {/* <!-- JavaScript para contraer el Menú -->  */}

            {/*  <script>
                const btn = document.querySelector('#menu-btn');
                const menu = document.querySelector('#sidemenu');
                btn.addEventListener('click', e =>{
                    menu.classList.toggle("menu-expanded");
                    menu.classList.toggle("menu-collapsed");  
                    document.querySelector('body').classList.toggle('body-expanded');
                });
            </script>*/}
            </div>
        </div>
    )
}

export default Sidebar
