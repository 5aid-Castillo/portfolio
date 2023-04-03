import React,{useContext,useState} from 'react';
import Languages from '../common/Lenguages';
import { HashLink } from 'react-router-hash-link';
import Contexto from '../../context/Contexto';
import Idioma from '../common/Idioma';
import { NavLink } from 'react-router-dom';
import '../../styles/Navbar.css';
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const [mostrarBarra,setMostrarBarra] = useState(false);
    const {idioma} = useContext(Contexto);
    const language = idioma[2].language;

    const close = () =>{
        setMostrarBarra(!mostrarBarra)
    }

  

  return (
  <>
      <nav className="menu">
                   {/*  <button className="menu-btn" onClick={() => setMostrarBarra(!mostrarBarra)}>
                            {mostrarBarra ?<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/></svg>
                            :<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"/></svg>
                            }
                    </button> */}
                    <button className='menu-btn'>
                    <Hamburger toggled={mostrarBarra} toggle={setMostrarBarra} size={25} color='#ffff'/>
                    </button>
                    <div className={mostrarBarra ?"navigation-menu" : "navigation-menu expanded"}>
                            <HashLink onClick={close} to="#home">{idioma[language].Nhome}</HashLink>

                            <HashLink onClick={close} to="#about">{idioma[language].Nabout}</HashLink>

                            <HashLink onClick={close} to="#portfolio">{idioma[language].Nportfolio}</HashLink>

                            <HashLink onClick={close} to="#contact">{idioma[language].Ncontact}</HashLink>

                            <NavLink onClick={close}><Languages/> </NavLink>
                            <NavLink onClick={close}> <Idioma/> </NavLink>
                            


                    </div>
                </nav>
            
  </>
  )
}

export default Navbar