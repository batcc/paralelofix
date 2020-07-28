import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './pages/home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';


ReactDOM.render(
    <BrowserRouter>
      <Switch>
      <Route path="/" component= {home} />
      <Route path="/cadastro/video" component= {CadastroVideo} />
      <Route path="/cadastro/video" component= {CadastroVideo} />
      <Route component= {() => (<div>"Pagina 404"</div>)} />
      </Switch>
    </BrowserRouter>,

    //<React.StrictMode>
      //<App />
    //</React.StrictMode>,
  document.getElementById('root')
);


