import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import SelectPet from "./pages/SelectPet";
import CadAnimal from "./pages/CadAnimal";
import Home from "./pages/Home";
import EditMed from "./pages/EditMed";
import CadMed from "./pages/CadMed";
import CadVac from "./pages/CadVac";
import CadDose from "./pages/CadDose";
import Vacina from "./pages/Vacina";
import Descricao from "./pages/Descricao";
import Medicamentos from "./pages/Medicamentos";
import Vacinas from "./pages/Vacinas";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Vacina/:id" component={Vacina} />
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/SelectPet" component={SelectPet} />
        <Route path="/CadAnimal" component={CadAnimal} />
        <Route path="/pet/:id" component={Home} />
        <Route path="/EditMed" exact component={EditMed} />
        <Route path="/CadMed/:id" exact component={CadMed} />
        <Route path="/CadVac/:id" component={CadVac} />
        <Route path="/CadDose/:id/:vacina" exact component={CadDose} />
        <Route path="/Descricao" exact component={Descricao} />
        <Route path="/Vacinas" exact component={Vacinas} />
        <Route path="/Medicamentos/:id" component={Medicamentos} />
      </Switch>
    </BrowserRouter>
  );
}
