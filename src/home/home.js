import React, {Component} from 'react';
import {TopBarComponent} from "../home-index";

export class HomeComponent extends Component {
    constructor(props) {
        console.log('constructor called-->', props);
        super(props);
        console.log('constructor && supper-->' , props);
    }
    componentDidUpdate() {
        console.log('componentDidUpdate called-->');
    }
    componentWillUpdate() {
        console.log('componentWillUpdate called-->');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate called-->', nextProps, nextState);
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps called-->');
    }

    componentWillMount() {
        console.log('componentWillMount called-->');
    }
    componentDidMount() {
        console.log('componentDidMount called-->');
    }
    render() {
        return (
            <div>
                <TopBarComponent/>
            </div>
        );
    }
}
