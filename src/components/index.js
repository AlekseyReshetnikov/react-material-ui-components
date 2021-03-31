import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';

const lazy = React.lazy;
const Datagrid = React.lazy(() => import('./data/datagrid'));
const SimpleTable = lazy(() => import('./data/simpletable'));
const BackDrop = lazy(() => import('./utils/backdrop'));


export default function Components(){
    const a=[];
    const push=(path, comp)=>a.push({path:path, component:comp});
    push("simpletable",SimpleTable);
    push("Datagrid", Datagrid);
    push("BackDrop", BackDrop);
    push("LabelBottomNavigation",lazy(()=>import('./navigation/LabelBottomNavigation')));
    return (
        <div>
            <p><Breadcrumbs aria-label="breadcrumb">
            <Link to="/"> Home</Link>
            </Breadcrumbs>
            </p>
    <Switch>
        {a.map((item) => (<Route path={"/components/"+item.path} exact component={item.component} />))}
    </Switch>
        </div>
);
}