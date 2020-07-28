import React from 'react';
import Menu from '../../componentes/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import Footer from '../../componentes/Footer'

function Home() {
  return (
    <div style={{ background: var (--grayDark)}}>
      <Menu />

      <BannerMain 
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url= { dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores.Mas o que eles fazem afinal? Descubra com a Vanessa"}/>

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]} 
      />

      <Footer />
    </div>
  );
}

export default App;
