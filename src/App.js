// import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import * as history from 'history';
import React from 'react';
import MainMenu from './components/mainmenu';
import Components from './components/index';
//import SimpleTable from './components/data/simpletable';
const lazy = React.lazy;
const hist = history.createBrowserHistory();
const Datagrid = React.lazy(()=> import( './components/data/datagrid'));
const SimpleTable = lazy(() => import('./components/data/simpletable'));
const BackDrop = lazy(()=> import('./components/utils/backdrop'));

function App() {

  return (
    <Router history={hist}>
    <div className="App">
      <React.Suspense fallback={null}>
      <Switch>
          <Route path="/" exact component={MainMenu}/>
            <Route path="/components" component={Components} />
          <Route path="/simpletable" exact component={SimpleTable} />
            <Route path="/Datagrid" exact component={Datagrid}/>
            <Route path="/BackDrop" exact component={BackDrop} />
      </Switch>
        </React.Suspense>
    </div>
    </Router>
  );
}

export default App;
