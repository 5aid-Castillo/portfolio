import React,{useContext} from 'react'
import Contexto from '../../context/Contexto';
import uk from '../../assets/uk.png';
import '../../styles/Header.css';

const Languages = () => {
    const {setIdioma} = useContext(Contexto);
    const {idioma} = useContext(Contexto);
    const change1 = () =>{
        setIdioma(
            idioma.map((data,index) => 
            index === 2
            ?{...data,language:0}
            :{...data}
            )
        );
    }


    return (
        <div className='languages'>
            <div className='flag' onClick={change1}>
                <img src={uk} alt="English"/>
            </div>

          
        </div>
    )
}

export default Languages