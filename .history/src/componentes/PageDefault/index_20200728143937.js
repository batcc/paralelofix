import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import styled from 'styled-components'

const Main = stryled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    

`;

function Pagedefault({children}) {
    return (
        <div>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </div>
    )
}

export default Pagedefault;