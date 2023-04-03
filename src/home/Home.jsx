import { useContext,useEffect } from "react";
import perfil from '../assets/profile_5.jpg';
/* import location from '../assets/contact-location.svg'; */
import email from '../assets/contact-email.svg';
/* import phone from '../assets/contact-phone.svg'; */
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg';
/* import stackoverflow from '../assets/stackoverflow.png'; */

import Button from "../components/common/Button";
import { HashLink } from "react-router-hash-link";
import '../styles/Home.css';
import Contexto from "../context/Contexto";
import ContactForm from '../components/layouts/ContactForm';



 import Aos  from 'aos'
import 'aos/dist/aos.css'
import Tabs from "../components/common/Tabs";



const Home = () => {
    const {idioma} = useContext(Contexto);
    const language = idioma[2].language;

useEffect(() => {
        Aos.init({duration:2000})
      },[]);

  return (
    <>
      <section className='home' id="home">
        <article className="hero-image">
            <aside className="hero-image-opacity">
                <div className="hero-image-content">
                    <h2 className="hero-image-title">{idioma[language].welcome} <br /> {idioma[language].site}</h2><br />
                   <br/> <a href="#contact"><Button as={HashLink}  to="#contact" variant="primary"/></a>
                </div>
            </aside>
        </article>
        </section> 
      <section className="about section container full-lg-screen" id="about">
            <article className="text-lg-right">
                <aside className="text-center text-lg-right">
                     <h1 data-aos="fade-up">Said Castillo Marin</h1>
                    <h5 data-aos="fade-up">{idioma[language].WB}</h5> 
                </aside>
                <p data-aos="fade-up">{idioma[language].TextDescription1} </p>
                <p data-aos="fade-up">{idioma[language].TextDescription2}</p>
                <p data-aos="fade-up">{idioma[language].TextDescription3}</p>
                <p data-aos="fade-up">{idioma[language].TextDescription4}</p> 
            
            </article>
             <article>
                <center>
                <img className="gray-scale" src={perfil} alt="SaidCastillo"  data-aos="fade-up"/>
                </center> 
                <div className="text-center text-lg-center">
                   <a className="btn-2" target="_blank" href={idioma[language].cv} rel="nooper" data-aos="fade-up">{idioma[language].btnDownload}</a>
                </div>
            </article> 
           <article>
                <h2 className="text-center text-lg-left" data-aos="fade-up">{idioma[language].skills} </h2>
                <div className="progress">
                    <p data-aos="fade-up">
                        <b>{idioma[language].front}</b>
                    </p>
                </div>
                <div className="progress">
                    <p data-aos="fade-up">
                        <b>{idioma[language].back}</b>
                    </p>
                </div>
            </article> 
        </section>  
 

         <section className="portfolio section" id="portfolio">
        <h2 className="section-title" data-aos="fade-up">{idioma[language].jobs}</h2>
    
            <Tabs />


         </section>

        <section className="contact section" id="contact">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">{idioma[language].contact}</h2>
                <article className="contact-cards" data-aos="fade-up">
                   {/*  <aside className="contact-card box-shadow-1">
                        <img src={location} alt="location" />
                        <h5>{idioma[language].loc}</h5>
                        <small>Mexico</small>
                    </aside> */}
                    {/* <aside className="contact-card box-shadow-1">
                        <img src={phone} alt="phone"/>
                        <h5>{idioma[language].phone}</h5>
                        <small><a href="https://wa.me/5212212054136" target="__blank">(+521) 2212054136</a></small>
                    </aside> */}
                    <aside className='contact-card box-shadow-1'>
                        <img src={email} alt="email"/>
                        <h5>Email</h5>
                        <small>said557@outlook.es</small>
                        <small>5aid.cm.work@gmail.com</small>
                    </aside>
                    <aside className='contact-card box-shadow-1'>
                        <img src={linkedin} alt="likedin"/>
                        <h5>Linkedin</h5>
                        <small><a href="https://www.linkedin.com/in/5aid-marin/" target="__blank">5aid-marin</a></small>
                    </aside>
                    <aside className='contact-card box-shadow-1'>
                        <img src={github} alt="github"/>
                        <h5>Github</h5>
                        <small><a href="https://github.com/5aid-Castillo" target="__blank">5aid-Castillo</a></small>
                    </aside>
                    {/* <aside className='contact-card box-shadow-1'>
                        <img src={stackoverflow} alt="github" className="stackoverflow"/>
                        <h5>Stackoverflow</h5>
                        <small><a href="https://es.stackoverflow.com/users/298133/sys-5aid" target="__blank">5aid</a></small>
                    </aside> */}
                </article>
               <ContactForm/> 

      </div>
      </section> 

    </>
  )
}

export default Home