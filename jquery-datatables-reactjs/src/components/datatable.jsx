import React, { Component } from 'react';
import '../assets/css/jquery.dataTables.css';

const $ = require('jquery');
$.Datatable = require('datatables.net');

export default class datatable extends Component {
    
    componentDidMount(){

    }

    componentWillUnmount(){

    }

    render() {
        return (
            <div>
                <table className="display" width="100%" ref={el => this.el = el}></table>
            </div>
        )
    }
}
