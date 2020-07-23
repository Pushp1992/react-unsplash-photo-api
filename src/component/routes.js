import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePageView, NotFoundView } from './component';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePageView} />
                {/* <Route path="/gene-details" component={GeneViewPage} /> */}
                <Route component={NotFoundView} />
            </Switch>
        </div>
    )
}

export default Routes;