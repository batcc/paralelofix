import React from 'react';
import styled from 'styled-components';
import Menu from './componentes/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer'

const AppWrapper = styled.div`
    background: var(--grayDark);
`;
function App() {
  return (
    <AppWrapper >
      <Menu />

      <BannerMain 
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url= { dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores.Mas o que eles fazem afinal"}/>

    </AppWrapper>
  );
}

export default App;
