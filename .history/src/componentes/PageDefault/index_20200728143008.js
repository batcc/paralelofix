import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';

function Pagedefault (props) {
    return (
        <div>
            <Menu />
                {props.c}
            <Footer />
        </div>
    )
}

export default Pagedefault;