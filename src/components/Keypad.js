import React, { Component } from 'react';

// Send the click event to the parent
// when that particular button is clicked,
// we will call this.props.OnClick function on every button click
// and pass e.target.name as an argument.

class Keypad extends Component {

    render() {
        const buttons = ["(","CE", ")", "C", "1","2","3","+","4","5","6","-","7", "8", "9", "*", ".","0","=","/" ]
        return (
            <div className="button">

                {buttons.map((num) => <button onClick={e => this.props.onClick(num)}>{num}</button>)}
            </div>
         );
    }
}

export default Keypad;