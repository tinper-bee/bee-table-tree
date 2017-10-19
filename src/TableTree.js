import React, { Component } from 'react';
import Table from 'bee-table';
import PropTypes from 'prop-types';

const propTypes = {
    columns:PropTypes.array.isRequired,
    data:PropTypes.array.isRequired
};
const defaultProps = {
    columns:[],
    data:[]
};
class TableTree extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {columns,data} = this.props;
        return (
            <Table columns={columns} data={data} />
        )
    }
};
TableTree.propTypes = propTypes;
TableTree.defaultProps = defaultProps;
export default TableTree;   