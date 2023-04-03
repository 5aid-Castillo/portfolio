import React,{useContext} from 'react'
import Contexto from '../../context/Contexto'

const Button = () => {
  const {idioma} = useContext(Contexto);
  const language = idioma[2].language;
  return (
    <>
        <button className="btn-contact"><span className="text-button">{idioma[language].btnContact}</span></button>
    </>
  )
}

export default Button