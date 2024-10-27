import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1 className="logo_text">Ajaramarela</h1>
                <div className="header_logo">
                    <img src="../../../img/Ajaramarela.jpg" alt="Ajaramarela"/>
                </div>
            </div>
            <nav className="nav">
                <a href="#about">Про Нас</a>
                <a href="#services">Послуги</a>
                <a href="#team">Команда</a>
                <a href="#portfolio">Портфоліо</a>
                <a href="#contacts">Контакти</a>
            </nav>
        </div>
    );
};

export default Header;