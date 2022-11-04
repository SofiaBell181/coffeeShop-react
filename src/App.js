import './App.css';
import './assets/css/Shop.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './Cart/Cart';
import logo from './assets/images/logo2.png';
import { useRef, useState } from 'react';
import { selectCart } from './store/cartSlice';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [navFix, setNavFix] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const menu = useRef();
    const navbar = useRef();

    const selectedCart = useSelector(selectCart);
    let totalCount = selectedCart.reduce((accum, item) => {
        return item.count + accum;
    }, 0)

    const navFixed = () => {
        if(window.scrollY >= 60) {
            setNavFix(true)
        } 
        else {
             setNavFix(false)
        }    
    }
    window.addEventListener('scroll', navFixed);


    const clickHandlerCart = () => {
       setShowCart(!showCart)
    }

    const showMenu = (e) => {
        console.log(e.target)
        if(e.target.classList.contains('navbar-toggler') || e.target.classList.contains( 'navbar-toggler-icon')){
            menu.current.classList.toggle('show') ;  
            navbar.current.classList.toggle('bgColor') ; 
        } 
    }
   
  return (
    <>
      
          <div className='app'>
            <Router>
                <div className={navFix ? 'navbar fixed' : 'navbar'} >
                    <nav className='nav container' ref={navbar}>

                            <div className='block-logo'>
                                <img className='logo' src={logo} width='85' alt="logo" />

                                <div className='block-menuCart__mb'>
                                    <div className='shoppingСart' onClick={clickHandlerCart}>
                                    <button className='btn-cart'></button>
                                        <span>{totalCount === 1 ? totalCount + ' товар' : 
                                        totalCount > 1 && totalCount < 5 ? totalCount + ' товара' :
                                        totalCount + ' товаров'}</span>
                                    </div>
                                </div>

                                <button className="navbar-toggler" onClick={showMenu}>
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>

                           <div className='block-menu' ref={menu}>
                           <ul className='menu'>
                                <li><Link to='/'>Кофе</Link></li>
                                <li><Link to='/about'>О компании</Link></li>
                                <li><Link to='/contact'>Контакты</Link></li>
                            </ul>
                           </div>

                            <div className='block-menuCart'>
                                <div className='shoppingСart' onClick={clickHandlerCart}>
                                <button className='btn-cart'></button>
                                    <span>{totalCount === 1 ? totalCount + ' товар' : 
                                    totalCount > 1 && totalCount < 5 ? totalCount + ' товара' :
                                    totalCount + ' товаров'}</span>
                                </div>
                            </div>
                    </nav>
                </div>

                <div className={showCart ? 'block-cart show' : 'block-cart close'}>
                    <Cart />
                </div>

                <Routes>
                    <Route path='/' element={<Shop/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>

                <div className="footer ">
                    <div className='footer__inner container'>
                            <div className='footer-links'>
                                <ul className='footer-menu footer-1'>
                                    <li><Link to='/'>Кофе</Link></li>
                                    <li><Link to='/about'>О компании</Link></li>
                                    <li><Link to='/contact'>Контакты</Link></li>
                                </ul>
                            </div>

                            <div className='footer-links'>
                                <img className='logo' src={logo} width='100' alt="logo" />
                            </div>

                            <div className='footer-links footer-3'>
                                <p>Служба поддержки клиентов:</p>
                                <a className='link-contact' href="tel:+8 (800) 600-63-44">+8 (800) 600-63-44</a>
                                <a className='link-contact' href="mailto:coffee-point@gmail.ru">coffee@point.ru</a>
                            </div>
                        
                    </div>

                    <div className='bottom-f'>
                            <div className='footer__bottom container'>
                                <p>© 2022 «Coffee Point»</p>
                                <p>Designed and Developed by Sofia Beloborodtseva</p>
                            </div>
                    </div>
                </div>
            </Router>
          </div>
      
    </>
  );
}

export default App;
