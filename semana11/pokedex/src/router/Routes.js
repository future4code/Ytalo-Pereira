import React, {BrowserRouter, Route, Switch } from "react";
import HomePage from "../HomePage/HomePage";

const Routes = () => {
    return(
        <BrowserRouter >
            <Switch>
                <Route exact path="/">
                    return < HomePage />
                </Route>
            </Switch>
        </BrowserRouter >
    )
}

export default Routes;