
import '../../styles/Tabs.scss';
import '../../styles/Tabs.css';
import {useState,useEffect,useContext} from 'react';
import Contexto from '../../context/Contexto';

import Aos  from 'aos'
import 'aos/dist/aos.css'

import img1 from '../../assets/screen-projects/artxicans.png';
import img2 from '../../assets/screen-projects/img2.jpg';
import img3 from '../../assets/screen-projects/img1.jpg';
import img4 from '../../assets/screen-projects/travel.png';
import img5 from '../../assets/screen-projects/trip.png';
import img6 from '../../assets/screen-projects/tasks.png';
import img7 from '../../assets/screen-projects/movies.png';
import img8 from '../../assets/screen-projects/mxbeaches.png';
import img9 from '../../assets/screen-projects/cultivo.png';
import img10 from '../../assets/screen-projects/hotels.png';
import img11 from '../../assets/screen-projects/reyes.png';
import img12 from '../../assets/screen-projects/argentina.png';


/* const {idioma} = useContext(Contexto);
const language = idioma[2].language; */

const Data1 = [
  {
    id:1,
    img:img1,
    description:'Hola',
    soruce:'',
    link:''
  },
  {
    id:2,
    img:img2,
    description:'',
    soruce:'',
    link:''
  },
  {
    id:3,
    img:img3,
    description:'Lorem Ipsum',
    soruce:'',
    link:''
  },
]
const Data2 = [
  {
    id:4,
    img:img4,
    description:'Lorem Ipsum',
    soruce:'',
    link:''
  },
  {
    id:5,
    img:img5,
    description:'Lorem Ipsum',
    soruce:'',
    link:''
  },
  {
    id:6,
    img:img6,
    description:'Lorem Ipsum',
    soruce:'',
    link:''
  },
  {
    id:7,
    img:img7,
    description:'Lorem Ipsum',
    soruce:'',
    link:''
  },
  {
    id:8,
    img:img8,
    description:'Lorem Ipsum',
    soruce:'',
    link:''
  },
  {
    id:9,
    img:img9,
    description:'Lorem Ipsum'
  },
]
const Data3 = [
  {
    id:10,
    img:img10,
    description:'Lorem Ipsum',
    soruce:'',
    link:''
  },
  {
    id:11,
    img:img11,
    description:'Lorem Ipsum',
    soruce:'',
    link:''
  },
  {
    id:12,
    img:img12,
    description:'Lorem Ipsum',
    soruce:'',
    link:''
  },
]



function Tabs() {
    const [toggleState, setToggleState] = useState(1);
    
    const {idioma} = useContext(Contexto);
    const language = idioma[2].language;
    const desc = idioma[language].source;
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    useEffect(() => {
        Aos.init({duration:2000})
      },[]);
    return (
      <div className="container-tabs" data-aos="fade-up">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            P1
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            P2
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            P3
          </button>
         
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <div className='projects section container'>
               
                    <div className='mainContent grid'>
                  
                        <div className='single-proyect'>
                            <div className='proyImage'>
                                <a href="https://github.com/5aid-Castillo/artxicans/tree/main/artxicans" target='__blank'><img src={img1} alt="" /></a>
                            </div>
                            <div className='proyFooter'>
                              <div className='descProyect'>
                                <small>{idioma[language].descriptionP1}</small>
                              </div>
                              <div className='tools'>
                                <ul>
                                  <li className='react'>React</li>
                                  <li className='sass'>Sass</li>
                                 
                                </ul>
                              </div>
                              <div className='sourceBtn flex'>
                                <a href='https://github.com/5aid-Castillo/artxicans/tree/main/artxicans' target='__blank'>{idioma[language].source}</a>
                                {/* <a href='' target='__blank'>{idioma[language].link}</a> */}
                              </div>
                            </div>
                        </div>
                        <div className='single-proyect'>
                            <div className='proyImage'>
                                <a href="https://github.com/5aid-Castillo/Pedido-Colores" target='__blank'><img src={img2} alt="" /></a>
                            </div>
                            <div className='proyFooter'>
                              <div className='descProyect'>
                                <small>{idioma[language].descriptionP2}</small>
                              </div>
                              <div className='tools'>
                                <ul>
                                  <li className='javascript'>Javascript</li>
                                  <li className='php'>PHP</li>
                                 
                                </ul>
                              </div>
                              <div className='sourceBtn flex'>
                                <a href='https://github.com/5aid-Castillo/Pedido-Colores' target='__blank'>{idioma[language].source}</a>
                                <a href='https://youtu.be/1IilfwdSvdk' target='__blank'>{idioma[language].link}</a>
                              </div>
                            </div>
                        </div>
                        <div className='single-proyect'>
                            <div className='proyImage'>
                                <a href="https://github.com/5aid-Castillo/artes-mex" target='__blank'><img src={img3} alt="" /></a>
                            </div>
                            <div className='proyFooter'>
                              <div className='descProyect'>
                                <small>{idioma[language].descriptionP3}</small>
                              </div>
                              <div className='tools'>
                                <ul>
                                  <li className='javascript'>Javascript</li>
                                  <li className='php'>PHP</li>
                                 
                                </ul>
                              </div>
                              <div className='sourceBtn flex'>
                                <a href='https://github.com/5aid-Castillo/artes-mex' target='__blank'>{idioma[language].source}</a>
                                <a href='https://youtu.be/z2-l3TFDMJ4' target='__blank'>{idioma[language].link}</a>
                              </div>
                            </div>
                        </div>
                   
                    </div>
                
            </div>
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
          <div className='projects section container'>
               
                    <div className='mainContent grid'>
                   
                        <div  className='single-proyect'>
                            <div className='proyImage'>
                               <a href="https://5aid-castillo.github.io/Rutas/" target='__blank'><img src={img4} alt="" /></a>
                            </div>
                            <div className='proyFooter'>
                              <div className='descProyect'>
                                <small>{idioma[language].descriptionP4}</small>
                              </div>
                              <div className='tools'>
                                <ul>
                                  <li className='react'>React</li>
                                  <li className='framer'>Framer Motion</li>
                                 
                                </ul>
                              </div>
                              <div className='sourceBtn flex'>
                                <a href='https://github.com/5aid-Castillo/Rutas' target='__blank'>{idioma[language].source}</a>
                                <a href='https://5aid-castillo.github.io/Rutas/' target='__blank'>{idioma[language].link}</a>
                              </div>
                            </div>
                        </div>
                        <div  className='single-proyect'>
                            <div className='proyImage'>
                              <a href="https://5aid-castillo.github.io/PlanTrip/" target='__blank'><img src={img5} alt="" /></a>
                            </div>
                            <div className='proyFooter'>
                              <div className='descProyect'>
                                <small>{idioma[language].descriptionP5}</small>
                              </div>
                              <div className='tools'>
                                <ul>
                                  <li className='react'>React</li>
                                  <li className='sass'>Sass</li>
                                 
                                </ul>
                              </div>
                              <div className='sourceBtn flex'>
                                <a href='https://github.com/5aid-Castillo/PlanTrip' target='__blank'>{idioma[language].source}</a>
                                <a href='https://5aid-castillo.github.io/PlanTrip/' target='__blank'>{idioma[language].link}</a>
                              </div>
                            </div>
                        </div>
                        <div  className='single-proyect'>
                            <div className='proyImage'>
                              <a href="https://5aid-castillo.github.io/Tasks/" target='__blank'><img src={img6} alt="" /></a>
                            </div>
                            <div className='proyFooter'>
                              <div className='descProyect'>
                                <small>{idioma[language].descriptionP6}</small>
                              </div>
                              <div className='tools'>
                                <ul>
                                  <li className='react'>React</li>
                                  <li className='tailwind'>Tailwind</li>
                                  <li className='redux'>ReduxToolkit</li>
                                 
                                </ul>
                              </div>
                              <div className='sourceBtn flex'>
                                <a href='https://github.com/5aid-Castillo/Tasks' target='__blank'>{idioma[language].source}</a>
                                <a href='https://5aid-castillo.github.io/Tasks/' target='__blank'>{idioma[language].link}</a>
                              </div>
                            </div>
                        </div>
                        <div  className='single-proyect'>
                            <div className='proyImage'>
                              <a href="https://5aid-castillo.github.io/Movies-App/" target='__blank'><img src={img7} alt="" /> </a>
                            </div>
                            <div className='proyFooter'>
                              <div className='descProyect'>
                                <small>{idioma[language].descriptionP7}</small>
                              </div>
                              <div className='tools'>
                                <ul>
                                  <li className='react'>React</li>
                                
                                 
                                </ul>
                              </div>
                              <div className='sourceBtn flex'>
                                <a href='https://github.com/5aid-Castillo/Movies-App' target='__blank'>{idioma[language].source}</a>
                                <a href='https://5aid-castillo.github.io/Movies-App/' target='__blank'>{idioma[language].link}</a>
                              </div>
                            </div>
                        </div>
                        <div  className='single-proyect'>
                            <div className='proyImage'>
                                <a href="https://5aid-castillo.github.io/BeachesApp/" target='__blank'><img src={img8} alt="" /></a>
                            </div>
                            <div className='proyFooter'>
                              <div className='descProyect'>
                                <small>{idioma[language].descriptionP8}</small>
                              </div>
                              <div className='tools'>
                                <ul>
                                  <li className='react'>React</li>
                                  <li className='sass'>Sass</li>
                                 
                                </ul>
                              </div>
                              <div className='sourceBtn flex'>
                                <a href='https://github.com/5aid-Castillo/BeachesApp' target='__blank'>{idioma[language].source}</a>
                                <a href='https://5aid-castillo.github.io/BeachesApp/' target='__blank'>{idioma[language].link}</a>
                              </div>
                            </div>
                        </div>
                        <div  className='single-proyect'>
                            <div className='proyImage'>
                              <a href="https://5aid-castillo.github.io/Cultivo/" target='__blank'><img src={img9} alt="" /></a>
                            </div>
                            <div className='proyFooter'>
                              <div className='descProyect'>
                                <small>{idioma[language].descriptionP9}</small>
                              </div>
                              <div className='tools'>
                                <ul>
                                  <li className='react'>React</li>
                                  <li>ReactBootstrap</li>
                                 
                                </ul>
                              </div>
                              <div className='sourceBtn flex'>
                                <a href='https://github.com/5aid-Castillo/Cultivo' target='__blank'>{idioma[language].source}</a>
                                <a href='https://5aid-castillo.github.io/Cultivo/' target='__blank'>{idioma[language].link}</a>
                              </div>
                            </div>
                        </div>
                   
                    </div>
                
            </div>
         
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
              <div className='projects section container'>
                    <div className='mainContent grid'>
                   
                        <div className='single-proyect'>
                            <div className='proyImage'>
                              <a href="https://5aid-castillo.github.io/HousesandApartments/" target='__blank'><img src={img10} alt="" /></a>
                            </div>
                             <div className='proyFooter'>
                              <div className='descProyect'>
                                <small>{idioma[language].descriptionP10}</small>
                              </div>
                              <div className='tools'>
                                <ul>
                                  <li className='react'>React</li>
                                  <li className='tailwind'>Tailwind</li>
                                 
                                </ul>
                              </div>
                              <div className='sourceBtn flex'>
                                <a href='https://github.com/5aid-Castillo/HousesandApartments' target='__blank'>{idioma[language].source}</a>
                                <a href='https://5aid-castillo.github.io/HousesandApartments/' target='__blank'>{idioma[language].link}</a>
                              </div>
                              </div> 
                        </div>
                        <div className='single-proyect'>
                            <div className='proyImage'>
                               <a href="https://5aid-castillo.github.io/Reyes/" target='__blank'><img src={img11} alt="" /></a>
                            </div>
                            <div className='proyFooter'>
                              <div className='descProyect'>
                                <small>{idioma[language].descriptionP11}</small>
                              </div>
                              <div className='tools'>
                                <ul>
                                  <li className='react'>React</li>
 
                                </ul>
                              </div>
                              <div className='sourceBtn flex'>
                                <a href='https://github.com/5aid-Castillo/Reyes' target='__blank'>{idioma[language].source}</a>
                                <a href='https://5aid-castillo.github.io/Reyes/' target='__blank'>{idioma[language].link}</a>
                              </div>
                            </div>
                        </div>
                        <div className='single-proyect'>
                            <div className='proyImage'>
                              <a href="https://5aid-castillo.github.io/Reservacion/" target='__blank'><img src={img12} alt="" /> </a>
                            </div>
                            <div className='proyFooter'>
                              <div className='descProyect'>
                                <small >{idioma[language].descriptionP12}</small>
                              </div>
                              <div className='tools'>
                                <ul>
                                  <li className='react'>React</li>
                                </ul>
                              </div>
                              <div className='sourceBtn flex'>
                                <a href='https://github.com/5aid-Castillo/Reservacion' target='__blank'>{idioma[language].source}</a>
                                <a href='https://5aid-castillo.github.io/Reservacion/' target='__blank'>{idioma[language].link}</a>
                              </div>
                            </div>
                        </div>
                 
                    </div>
                
            </div>
          </div>

         
        </div>
      </div>
    );
  }
  
  export default Tabs;