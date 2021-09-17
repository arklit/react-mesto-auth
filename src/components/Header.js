import React from 'react';
import headerLogo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
 function Header(props) {
     const location = useLocation();
     return (
        <header className="header">
          <img className="header__logo" src={headerLogo} alt="лого" />
          { props.loggedIn ? (
          <div className="header__container">
            <p className='header__email'>{props.userEmail}</p>
            <Link className='header__link' to='sign-in' onClick={props.onSignOut}>Выйти</Link>
          </div>
          ) : (
        <Link className="header__link"
          to={`${location.pathname === '/sign-in' ? '/sign-up' : '/sign-in'}`}
          >
          {`${location.pathname === '/sign-in' ? 'Регистрация' : 'Войти' }`}
        </Link>
          )}
        </header>
     );
 }
export default Header
