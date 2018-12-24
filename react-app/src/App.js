import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    render() {

        state = {
            characters: [{
                'name': 'Michael',
                'job': 'Developer'
            },
            {
                'name': 'Henry',
                'job': 'Admin'
            }, {
                'name': 'Kim',
                'job': 'QC'
            }, {
                'name': 'George',
                'job': 'Director'
            }]
        };
        return (
            <div className="container">
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter} />
            </div>
        );
    }

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => { return i !== index; })
        })
    }
}



export default App;