import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import styled from 'styled-components'

const 

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