import React, { Component } from 'react';
export default class Hello extends Component {
    render() {
        return (
            <h1>Hello MGM</h1>
        );
    }

    static getType() {
        return "Hello";
    }
}