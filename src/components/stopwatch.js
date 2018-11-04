import React, { Component } from 'react';
import Time from './format_time';

class StopWatch extends Component {
    constructor(props){
        super(props);

        this.state = {
            status: 'Stopped',
            start: 'null',
            elapsed: 0
        };

        // this.start = this.start.bind(this);
        // this.stop = this.stop.bind(this);
        // this.update = this.update.bind(this);
        // this.reset = this.reset.bind(this);
    };

    start = () => {
        const {start, elapsed} = this.state;
        let newStart = new Date().getTime(); 
        if (start) {
            newStart -= elapsed
        }
        this.setState({
            status: 'Running',
            start: newStart
        });
        setTimeout(this.update, 10)
    }

    stop = () => {
        this.setState({
            status: 'Stopped'
        });
    }
    reset = () => {
        this.setState({
            status: 'Stopped',
            start: 'null',
            elapsed: 0
        })
    }
    update = () => {
        const { status, start } = this.state;
            if (status === 'Running') {
                this.setState({
                    elapsed: new Date().getTime() - start
                });
                setTimeout( this.update, 10)
            }
    }

    render() {
        //destructuring to access keys in objects more easily
        const { status, elapsed } = this.state;
        return (
            <div className="jumbotron">
                <h1 className="display-3"><Time elapsed={elapsed}/></h1>
                <hr className="my-3"></hr>
                <p className="lead" className="text-center">{status}</p>
                <p className="text-center">
                    <button className="btn btn-outline-success mx-3" onClick={this.start}>Start</button>
                    <button className="btn btn-outline-danger mx-3"  onClick={this.stop}>Stop</button>
                    <button className="btn btn-outline-warning mx-3" onClick={this.reset}>Reset</button>
                </p>
            </div>
        )
    }
}

export default StopWatch;