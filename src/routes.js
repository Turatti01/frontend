import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Selecionar from './pages/Selecionar';
import CadAnimal from './pages/CadAnimal';
import Home from './pages/Home';
export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/selecionar" component={Selecionar} />
                <Route path="/CadAnimal" component={CadAnimal} />
                <Route path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}