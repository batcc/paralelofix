import React from 'react';
import PageDefault from '../../../componentes/PageDefault'
import { Link } from 'react-router-dom';

function CadastroVideo () {
    return (
      <PageDefault>
        Pagina de cadastro de video
        <Link to="/cadastro/categoria">
            
        </Link>
      </PageDefault>
    )
  }

export default CadastroVideo;