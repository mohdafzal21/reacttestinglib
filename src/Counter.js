import React, { Component } from 'react';

class Counter extends Component {
    state = {  
        count : 0
    }
    increment = ()=> {
        this.setState({
            count : this.state.count + 1
        })
    }
    render() { 
        const {count} = this.state
        return ( 
            <div>
                <button onClick={this.increment} data-testid='counter-button'>
                {count}
                </button>
            </div>
         );
    }
}
 
export default Counter;