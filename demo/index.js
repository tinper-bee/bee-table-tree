
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TableTree from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 树形数据展示","code":"\n\n/**\n*\n* @title 树形数据展示\n* @description  根据数组的多层嵌套来实现树表结构\n*\n*/\n\nimport React, { Component } from 'react';\nimport TableTree from 'tinper-bee';\nimport { Con, Row, Col } from 'bee-layout';\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.columns = [{\n            title: \"Name\",\n            dataIndex: \"name\",\n            key: \"name\",\n            width: \"40%\"\n        },\n        {\n            title: \"Age\",\n            dataIndex: \"age\",\n            key: \"age\",\n            width: \"30%\"\n        },\n        {\n            title: \"Address\",\n            dataIndex: \"address\",\n            key: \"address\"\n        }];\n\n        this.data = [{\n            key: 1,\n            name: \"root\",\n            age: 60,\n            address: \"New York No. 1 Lake Park\",\n            children: [\n                {\n                    key: 11,\n                    name: \"firstChildNode\",\n                    age: 42,\n                    address: \"New York No. 2 Lake Park\",\n                    children: [\n                        {\n                            key: 111,\n                            name: \"sencondChildNode\",\n                            age: 16,\n                            address: \"New York No. 3 Lake Park\"\n                        }\n                    ]\n                },\n                {\n                    key: 12,\n                    name: \"firstChildNode\",\n                    age: 30,\n                    address: \"New York No. 3 Lake Park\",\n                    children: [\n                        {\n                            key: 121,\n                            name: \"sencondChildNode\",\n                            age: 16,\n                            address: \"New York No. 3 Lake Park\"\n                        }\n                    ]\n                },\n               \n            ]\n        }];\n    }\n    render() {\n        return (\n            <div className=\"demo1\">\n                <TableTree columns={this.columns} data={this.data} />\n            </div>\n        )\n    }\n}\n","desc":"  根据数组的多层嵌套来实现树表结构"},{"example":<Demo2 />,"title":" 树形数据展示","code":"\n\n/**\n*\n* @title 树形数据展示\n* @description  根据数组的多层嵌套来实现树表结构\n*\n*/\nimport React, { Component } from 'react';\nimport TableTree from 'tinper-bee';\nimport { Con, Row, Col } from 'bee-layout';\n\nclass Demo2 extends Component {\n    constructor(props) {\n        super(props);\n        this.columns = [{\n            title: \"Name\",\n            dataIndex: \"name\",\n            key: \"name\",\n            width: \"40%\"\n        },\n        {\n            title: \"Age\",\n            dataIndex: \"age\",\n            key: \"age\",\n            width: \"30%\"\n        },\n        {\n            title: \"Address\",\n            dataIndex: \"address\",\n            key: \"address\"\n        }];\n\n        this.data = [{\n            key: 1,\n            name: \"root\",\n            age: 60,\n            address: \"New York No. 1 Lake Park\",\n            children: [\n                {\n                    key: 11,\n                    name: \"firstChildNode\",\n                    age: 42,\n                    address: \"New York No. 2 Lake Park\",\n                    children: [\n                        {\n                            key: 111,\n                            name: \"sencondChildNode\",\n                            age: 16,\n                            address: \"New York No. 3 Lake Park\",\n                            children: [\n                                {\n                                    key: 1111,\n                                    name: \"thildChildNode\",\n                                    age: 16,\n                                    address: \"New York No. 3 Lake Park\",\n                                    children: [\n                                        {\n                                            key: 11111,\n                                            name: \"forthChildNode\",\n                                            age: 16,\n                                            address: \"New York No. 4 Lake Park\"\n                                        }\n                                    ]\n                                }\n                            ]\n\n                        }\n                    ]\n                },\n                {\n                    key: 12,\n                    name: \"firstChildNode\",\n                    age: 30,\n                    address: \"New York No. 3 Lake Park\",\n                    children: [\n                        {\n                            key: 121,\n                            name: \"sencondChildNode\",\n                            age: 16,\n                            address: \"New York No. 3 Lake Park\"\n                        }\n                    ]\n                },\n\n            ]\n        }];\n    }\n    render() {\n        return (\n            <div className=\"Demo2\">\n                <TableTree columns={this.columns} data={this.data} />\n            </div>\n        )\n    }\n}\n","desc":"  根据数组的多层嵌套来实现树表结构"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
