import React, { Component } from 'react'

class Table extends Component {
    render() {
        const { characterData } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        );
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}


const TableBody = props => {
    //loop throuh each array element, construct html elemnt and add it to "rows"
    const rows = props.characterData.map((row, index) => {
        return (
            //Include key to index each table row
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}


export default Table;