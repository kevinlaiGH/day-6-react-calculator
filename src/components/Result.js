import React, { Component } from 'react';


// CHILD COMPONENT (RECIEVING PROPS FROM PARENT)
class Result extends Component {

    render() {
        let {result} = this.props
        return (
        <div className="result">
            <p>{result}</p>
        </div> );
    }
}

export default Result;