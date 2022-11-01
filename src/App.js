import './App.css';
import './assets/css/Shop.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './Cart/Cart';
import logo from './assets/images/logo2.png'
import { useState } from 'react';
import { selectCart } from './store/cartSlice';
import { useSelector } from 'react-redux';

function App() {
    const [navFix, setNavFix] = useState(false);
    const [showCart, setShowCart] = useState(false);

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

  return (
    <>
      
          <div className='app'>
            <Router>
                <div className={navFix ? 'navbar fixed' : 'navbar'} >
                    <nav className='nav'>
                            <div>
                                <img className='logo' src={logo} width='85' alt="logo" />
                            </div>
                           <div>
                           <ul className='menu'>
                                <li><Link to='/'>Кофе</Link></li>
                                <li><Link to='/about'>О компании</Link></li>
                                <li><Link to='/contact'>Контакты</Link></li>
                            </ul>
                           </div>
                            <div className='shoppingСart' onClick={clickHandlerCart}>
                               <button className='btn-cart'></button>
                                <span>{totalCount == 1 ? totalCount + ' товар' : 
                                totalCount > 1 && totalCount < 5 ? totalCount + ' товара' :
                                totalCount + ' товаров'}</span>
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

                <div className="footer">
                    <div className='footer__inner'>
                            <div className='col col-1'>
                                <ul className='footer-menu'>
                                    <li><Link to='/'>Кофе</Link></li>
                                    <li><Link to='/about'>О компании</Link></li>
                                    <li><Link to='/contact'>Контакты</Link></li>
                                </ul>
                            </div>

                            <div className='col'>
                                <img className='logo' src={logo} width='100' alt="logo" />
                            </div>

                            <div className='col col-3'>
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
