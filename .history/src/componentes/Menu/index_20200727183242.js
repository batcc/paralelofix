import React from 'react';
import Logo from '../../assets/images/LogoParalelo.png'
import './Menu.css'
import Button from '../Button'

function Menu() {
    return (
        <Menu className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo video
            </Button>
        </Menu>
    );
}

export default Menu;