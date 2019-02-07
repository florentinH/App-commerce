import React from 'react'
import { handleResponse } from '../../helpers'
import { API_URL } from '../..config'
import TableEtudiants from './TableEtudiants/TableEtudiants.js'
import Loading from '../shared/Loading/Loading'

class Etudiants extends React.Component {
    constructor() {
        super()

        this.state = {
            //checked if we don't have a web service call in progress
            loading: false,
            etudiants: [],
            //display our error messages when to calling our web services
            error: null
        }
    }
    // get the list of etudiant to load our component etudiant
    componentDidMount() {
        this.fetchEtudiants()
    }


    // get the list of etudiant from the back
    fetchEtudiants() {
        this.setState({ loading: true })
        fetch(`${API_URL}/etudiant`)
            //we use our Helper (handleResponse), to decode the JSON data received from back
            .then(handleResponse)
            .then((data => {
                const etudiants = data.item;

                this.setState({
                    etudiants,
                    loading: false
                })
            }))
            .catch((error) => {
                this.setState({ error : error.errorMessage, loading:false })
            })
    }

    render() {
        const {loading, error, etudiants} = this.state
        if(loading) {
            return <div className="loading-container"><Loading /></div>
        }

        if(error) {
            return <div className="error">{error}</div>
        }
        return (
            <div>
                <TableEtudiants etudiants={etudiants} />
            </div>
        )
    }
}

export default Etudiants