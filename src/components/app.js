import React from 'react'; 
import Table from './table'


const students = [
    {
        student: 'Andy Park',
        course:'React',
        grade:'60'  
    },
    {
        student: 'Will Smith',
        course:'CSS',
        grade:'75'  
    },
    {
        student: 'Chris Pratt',
        course:'Javascript',
        grade:'55'  
    },

];

function App() {
    const container = (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
    return container
};

export default App;