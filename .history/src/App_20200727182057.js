import React from 'react';
import Menu from './componentes/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer'

function App
const AppWrapper = styled.div`
    background-color: var(--grayDark)
`;
function App() {
  return (
    <div >
      <Menu />

      <BannerMain 
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url= { dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front-end? Trabalhando na área"}/>

    </div>
  );
}

export default App;
