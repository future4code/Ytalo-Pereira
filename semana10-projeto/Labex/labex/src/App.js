import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { AdminHomePage } from "./Telas/AdminHomePage";
import { ApplicationFormPage } from "./Telas/ApplicationFormPage";
import { CreateTripPage } from "./Telas/CreateTripPage";
import { HomePage } from "./Telas/HomePage";
import { ListTripsPage } from "./Telas/ListTripsPage";
import { LoginPage } from "./Telas/LoginPage";
import { TripDetailsPage } from "./Telas/TripDetailsPage";


function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact path={"/"}>
         <HomePage />
       </Route>

       <Route exact path={"/trips/list"}>
         <ListTripsPage />
       </Route>

       <Route exact path = {"/trips/application"}>
         <ApplicationFormPage />
       </Route>

       <Route exact path={"/login"}>
         <LoginPage />
       </Route>

       <Route exact path={"/admin/trips/list"}>
         <AdminHomePage />
       </Route>

       <Route exact path={"/admin/trips/create"}>
         <CreateTripPage />
       </Route>

       <Route exact path={"/admin/trips/:id"}>
         <TripDetailsPage />
       </Route>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
