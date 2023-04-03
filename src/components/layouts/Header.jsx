import { BrowserRouter } from "react-router-dom"
import Navbar from "./Navbar"
import navIcon3 from '../../assets/nav-icon2.svg'
import navIcon2 from '../../assets/nav-icon3.svg'
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
            <section className="container">
            <div className='brand-name'>
            <a href='/'><h1>SCM</h1></a>

            </div>
             <div className="social-icon">
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2F5aid_cm%3Figshid%3DYmMyMTA2M2Y%253D%26fbclid%3DIwAR1DFPz9PMPES63iQjoPS_CWYWdKCg-_FMKPIOxCtSiD_dJGq_m80ZD2s6w&h=AT3PKljL_zKG_4amtz5Ep5tflqKobBVYnYQvDw0Q9N9yvjfJ-LkS-l8lX72pk7bfVL5iIyGGWgcbHqvfmK8EmgNHMx7diB5Y5gBHSk8Vmr7VMwVI0Vc3F4mzUiQoWwJbwLTHkw" target="__blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.facebook.com/saidemmanuel.castillomarin/"><img src={navIcon3} alt="" /></a>
              </div> 
              
              <BrowserRouter>
                <Navbar />
              </BrowserRouter>

                </section>
        </header>
  )
}

export default Header