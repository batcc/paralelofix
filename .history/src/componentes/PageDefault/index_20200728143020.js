import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';

function Pagedefault ({}) {
    return (
        <div>
            <Menu />
                {props.chil}
            <Footer />
        </div>
    )
}

export default Pagedefault;