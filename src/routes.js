import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import SelectPet from './pages/SelectPet';
import CadAnimal from './pages/CadAnimal';
import Home from './pages/Home';
import EditMed from './pages/EditMed';
import CadVac from './pages/CadVac';
import Vacina from './pages/Vacina';
import Descricao from './pages/Descricao';
import Medicamentos from './pages/Medicamentos';
export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Vacina/:id" component={Vacina}/>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/SelectPet" component={SelectPet} />
                <Route path="/CadAnimal" component={CadAnimal} />
                <Route path="/home" component={Home} />
                <Route path="/EditMed" exact component={EditMed} />
                <Route path="/CadVac/:id" exact component={CadVac} />
                <Route path="/Descricao" exact component={Descricao} />
                <Route path="/Medicamentos/:id" component={Medicamentos}/>
            </Switch>
        </BrowserRouter>
    );
}