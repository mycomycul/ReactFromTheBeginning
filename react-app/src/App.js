import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    render() {

        const characters = [
            {
                'name': 'Michael',
                'job' : 'Developer'
            },
            {
                'name': 'Henry',
                'job' : 'Admin'
            },    {
                'name': 'Kim',
                'job' : 'QC'
            },    {
                'name': 'George',
                'job' : 'Director'
            }
        ]
        return (
            <div className="container">
                <Table characterData={characters} />
            </div>
        );
    }
}

export default App;