import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';

function Pagedefault({children}) {
    return (
        <div>
            <Menu />
                {children}
            <Footer />
        </div>
    )
}

export default Pagedefault;