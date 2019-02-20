
import React from 'react';
import './TableEtudiants.css';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

const TableEtudiants = (props) => {
    const {etudiants, history} = props;

    return (<div className="table-container">
        <div className="h2 text-center">Liste Etudiant</div>
        <div className="row">
            <div className="col-md-12 pad-10">
                <button onClick={()=> history.push(`/ajout`)} type="submit" className="btn btn-primary">
                    Ajout Etudiant
                </button>
            </div>
        </div>
        <br/>
        <br/>
        <table className="table table-striped">
            <thead className="Table-head">
            <tr>
                <th>Matricule</th>
                <th>Nom</th>
                <th>Prenom</th>
            </tr>
            </thead>
            <tbody>
            {etudiants.map((etudiant) => (
                <tr key={etudiant.id_etudiant}
                >
                    <td>
                        <span>{etudiant.matricule}</span>
                    </td>
                    <td>
                        <span>{etudiant.nom}</span>
                    </td>
                    <td>
                        <span>{etudiant.prenom}</span>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>)
    
};

TableEtudiants.propTypes = {
    etudiants: propTypes.array.isRequired,
};

export default withRouter(TableEtudiants);