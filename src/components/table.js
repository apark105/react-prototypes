import React from 'react';

function Table(props) {
    const tableRows = props.data.map( (item,index) => {
        return (
                <tr key={index}>
                    <td>{item.student}</td>
                    <td>{item.course}</td>
                    <td>{item.grade}</td>
                </tr>
                )
    });



    const createTable = (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Student</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
                {/* <tr>
                    <td>Andy</td>
                    <td>React</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Sasha</td>
                    <td>React</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Andrew</td>
                    <td>React</td>
                    <td>80</td>
                </tr> */}
            </tbody>
        </table>
    )
    return createTable
}

export default Table