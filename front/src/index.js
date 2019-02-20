import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/shared/Header/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Etudiants from "./components/Etudiants/Etudiants";
import AjoutEtudiant from './components/AjoutEtudiant/AjoutEtudiant';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header></Header>

                <Switch>
                    <Route path="/" component={Etudiants} exact />
                    <Route path="/ajout" component={AjoutEtudiant} exact />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)