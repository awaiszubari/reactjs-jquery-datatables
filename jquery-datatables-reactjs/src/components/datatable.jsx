import React, { Component } from 'react';
import '../assets/css/jquery.dataTables.css';

const $ = require('jquery');
$.Datatable = require('datatables.net');

export default class datatable extends Component {
    
    componentDidMount(){
        this.$el = $(this.el);
        this.$el.DataTable(
            {
                data:this.props.data,
                columns:this.props.columns,
            }
        )

    }

    componentWillUnmount(){
        this.$el.DataTable.destroy(true);
    }

    render() {
        return (
            <div>
                <table className="display" width="100%" ref={el => this.el = el}></table>   
            </div>
        )
    }
}
