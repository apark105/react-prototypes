import React from 'react';
import Stopwatch from './stopwatch'

// function App(){
//     return (
//         <div className="container">
//             <h1 className="text-center">
//                 Stopwatch
//             </h1>
//         </div>
//         )
// }

export const App = (props) => {
    return (
        <div className="container">
            <h1 className="text-center">Stopwatch</h1>
            <Stopwatch/>
        </div>
        )
}

// export default App;
