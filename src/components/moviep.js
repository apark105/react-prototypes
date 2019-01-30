import React from 'react';

function Movie(props) {
    console.log(props);
    const { info } = props; 
    return (


            <div className="col-sm-4">
            
                <h3 className="text-center">
                    {info['im:name'].label}
                </h3>
                <div className="d-flex justify-content-center">
                    <img src={info['im:image'][2].label} />
                </div>
                <p>
                    {info['summary'].label}
                </p>
            
            </div>

    )
}

export default Movie;