
import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import TableEtudiants from './TableEtudiants/TableEtudiants.js';
import Loading from '../shared/Loading/Loading';

class Etudiants extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            etudiants: [],
            error: null
        }
    }

    componentDidMount() {
        this.fetchEtudiants();
    }

    fetchEtudiants() {
        this.setState({ loading: true });
        fetch(`${API_URL}/etudiant`)
            .then(handleResponse)
            .then((data) => {
                const etudiants  = data.item;

                this.setState({
                    etudiants,
                    loading: false
                });
            })
            .catch((error) => {
                this.setState({ error : error.errorMessage, loading: false });
            });
    }


    render() {
        const {loading, error, etudiants} = this.state;
        if(loading) {
            return <div className="loading-container"><Loading /></div>
        }
        if(error) {
            return <div className="error">{error}</div>
        }
        return (
            <div>
                <TableEtudiants etudiants = {etudiants} />
            </div>
        )
    }
}

export default Etudiants;