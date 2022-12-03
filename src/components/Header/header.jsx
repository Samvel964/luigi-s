import './header.scss';
import logo from '../../images/logo-white.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Registration from '../../pages/Registration/registration';
import { setToken } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCartId } from '../../features/userSlice';
import { useEffect } from 'react';
import { setCart } from '../../features/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);
    const [login, setLogin] = useState(false);
    const [registration, setRegistration] = useState(false);
    const [order, setOrder] = useState(true);
    const token = localStorage.getItem('token');
    const userCart = useSelector(state => state.user.cart);

    useEffect(() => {
        if (pathname === '/cart') {
            setOrder(false);
        } else {
            setOrder(true);
        }
        setVisible(false);
    },[pathname])

    const logCLick = () => {
        setLogin(true);
        setRegistration(false);
    }

    const registrClick = () => {
        setLogin(false);
        setRegistration(true);
    }

    const showRegistr = () => {
        setLogin(false);
        setRegistration(false);
    }

    const logOut = () => {
        localStorage.removeItem('token');
        dispatch(setToken(""));
        dispatch(setCartId([]));
        dispatch(setCart());
        setVisible(false);
    }
    
    return(
        <header>
            <div className="container">
                <Link to="/luigis" className="logo"><img src={logo} alt="Logo" /></Link>
                <div className="right-area">
                    {token ? 
                    <h6>
                        {order ? 
                        <Link 
                            to="/cart" 
                            className="plr-20 color-white btn-fill-primary me-1 order">ORDER NOW
                        </Link> : null}
                        <Link 
                            to="/luigis" 
                            className="plr-20 color-white btn-fill-primary log-out me-1 logout"
                            onClick={logOut}>LOGOUT
                        </Link>
                    </h6> : 
                    <h6>
                        <Link 
                          to="/luigis" 
                          className="plr-20 color-white btn-fill-primary me-1"
                          onClick={logCLick}>Log in
                        </Link>
                        <Link 
                          to="" 
                          className="plr-20 color-white btn-fill-primary"
                          onClick={registrClick}>Sign up
                        </Link>
                    </h6>}
                </div>

                {login ? <Registration login="login " signup='signup slide-up' show={showRegistr} /> : null}
                {registration ? <Registration login="login slide-up" signup='signup' show={showRegistr} /> : null}

                <span 
                    className="menu-nav-icon" 
                    data-menu="#main-menu"
                    onClick={() => setVisible(!visible)}><i><GiHamburgerMenu /></i>
                </span>

                <ul className={visible ? "main-menu font-mountainsre visible-menu" : "main-menu font-mountainsre"} id="main-menu">
                    <li><Link to="/luigis">HOME</Link></li>
                    <li><Link to="/about">ABOUT US</Link></li>
                    <li><Link to="/menu">MENU</Link></li>
                    <li className='cart-li'><Link to="/cart">CART</Link><span className='count'>{userCart.length}</span></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    {token &&                     
                    <li>
                        <Link 
                            to="/luigis" 
                            className="logout-icon"
                            onClick={logOut}>LOGOUT
                        </Link>
                    </li>}
                </ul>
                <div className="clearfix"></div>
            </div>
        </header>
    )
}

export default Header
