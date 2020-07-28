import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/LogoParalelo.png'
import './Menu.css'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix" />
            </a>
            <Button as={Link} className="ButtonLink" href="/cadastro/video">
                Novo video
            </Button>
        </nav>
    );
}

export default Menu;