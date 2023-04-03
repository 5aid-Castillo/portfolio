import React,{useContext} from 'react'
import Contexto from '../../context/Contexto';
import spain from '../../assets/spain.jpg';
import '../../styles/Header.css'
const Idioma = () => {
    const {setIdioma} = useContext(Contexto);
    const {idioma} = useContext(Contexto);

    const change2 = () =>{
        setIdioma(
            idioma.map((data,index) =>
            index === 2
            ? {...data,language:1}
            : {...data}
            )
        );
    }

    return (
        <div className='languages'>
         
            
            <div className='flag' onClick={change2}>
                <img src={spain} alt="Spanish"/>
            </div>
        </div>
    )
}
export default Idioma;