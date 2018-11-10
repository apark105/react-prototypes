import React from 'react'; 

function Movie(props){
    const { info } = props
    return (
        <div> 
            <img src={info['im:image'][2].label}></img>
            <h3> {info['im:name'].label} </h3>
            <p>{info.summary.label}</p>
        </div>
    )
}

export default Movie; 