import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from "../Component/Modal";


class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };

        this.addCount = this.addCount.bind(this);
        this.subtractCount = this.subtractCount.bind(this)
    }

    addCount = () => {this.setState({counter: this.state.counter + 1})};
    subtractCount = () => {this.setState({counter: this.state.counter - 1})};

    renderCounter = () => {
        return (
            <>
                <Button variant="contained" color="primary" onClick={this.addCount}>+</Button>
                <h1>{this.state.counter}</h1>
                <Button variant="contained" color="secondary" onClick={this.subtractCount}>-</Button>
            </>
        )
    };

    componentWillUnmount() {
        console.log("COMPONENT WILL UNMOUNT");
    }

    render() {
        return (
            <>
            <Modal content={this.renderCounter()} title="Counter"/>
            </>
        );
    }
}

export default Counter;