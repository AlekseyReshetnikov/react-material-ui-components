import { Route, Switch } from 'react-router-dom';
import React from 'react';

const lazy = React.lazy;
const Datagrid = React.lazy(() => import('./data/datagrid'));
const SimpleTable = lazy(() => import('./data/simpletable'));
const BackDrop = lazy(() => import('./utils/backdrop'));


export default function Components(){
    return (<Switch>
        <Route path="/simpletable" exact component={SimpleTable} />
        <Route path="/Datagrid" exact component={Datagrid} />
        <Route path="/BackDrop" exact component={BackDrop} />
    </Switch>
);
}