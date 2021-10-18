import React, {useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { createGlobalStyle } from "styled-components";
import { AdminHomePage } from "./Telas/AdminHomePage";
import { ApplicationFormPage } from "./Telas/ApplicationFormPage";
import { CreateTripPage } from "./Telas/CreateTripPage";
import { HomePage } from "./Telas/HomePage";
import { ListTripsPage } from "./Telas/ListTripsPage";
import { LoginPage } from "./Telas/LoginPage";
import { TripDetailsPage } from "./Telas/TripDetailsPage";


function App() {


   const [paginaAtual, setPaginaAtual] = useState("home")

   const escolherPagina = () => {
     switch(paginaAtual){
       case "home":
         return <HomePage />
       case "list": 
         return < ListTripsPage />
       case "form": 
         return < CreateTripPage />
       case "cart":
         return < AdminHomePage />
       case "detail":
         return < TripDetailsPage />
       case "login": 
        return <LoginPage />
       case "inscricao":
        return <ApplicationFormPage />
       default:
        return < HomePage />
     }
   }

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
