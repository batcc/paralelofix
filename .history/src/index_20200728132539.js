import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function CadastroVideo {
  return (
    <div>
      Pagina de cadastro de video
    </div>
  )
}

ReactDOM.render(
    <BrowserRouter>
      <Switch>
       <Route path="/cadastro/video" component= {} />
       <Route path="/" component= {App} />
      </Switch>
    </BrowserRouter>,

    //<React.StrictMode>
      //<App />
    //</React.StrictMode>,
  document.getElementById('root')
);


