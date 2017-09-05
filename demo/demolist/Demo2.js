

/**
*
* @title 树形数据展示
* @description  根据数组的多层嵌套来实现树表结构
*
*/
import React, { Component } from 'react';
import TableTree from '../../src';
import { Con, Row, Col } from 'bee-layout';

class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: "40%"
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
            width: "30%"
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address"
        }];

        this.data = [{
            key: 1,
            name: "root",
            age: 60,
            address: "New York No. 1 Lake Park",
            children: [
                {
                    key: 11,
                    name: "firstChildNode",
                    age: 42,
                    address: "New York No. 2 Lake Park",
                    children: [
                        {
                            key: 111,
                            name: "sencondChildNode",
                            age: 16,
                            address: "New York No. 3 Lake Park",
                            children: [
                                {
                                    key: 1111,
                                    name: "thildChildNode",
                                    age: 16,
                                    address: "New York No. 3 Lake Park",
                                    children: [
                                        {
                                            key: 11111,
                                            name: "forthChildNode",
                                            age: 16,
                                            address: "New York No. 4 Lake Park"
                                        }
                                    ]
                                }
                            ]

                        }
                    ]
                },
                {
                    key: 12,
                    name: "firstChildNode",
                    age: 30,
                    address: "New York No. 3 Lake Park",
                    children: [
                        {
                            key: 121,
                            name: "sencondChildNode",
                            age: 16,
                            address: "New York No. 3 Lake Park"
                        }
                    ]
                },

            ]
        }];
    }
    render() {
        return (
            <div className="Demo2">
                <TableTree columns={this.columns} data={this.data} />
            </div>
        )
    }
}
export default Demo2;