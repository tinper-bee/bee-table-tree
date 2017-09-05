# bee-table-tree

[![npm version](https://img.shields.io/npm/v/bee-table-tree.svg)](https://www.npmjs.com/package/bee-table-tree)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-table-tree/master.svg)](https://travis-ci.org/tinper-bee/bee-table-tree)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-table-tree/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-table-tree?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-table-tree.svg)](https://david-dm.org/tinper-bee/bee-table-tree#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-table-tree.svg?style=flat)](https://npmjs.org/package/bee-table-tree)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-table-tree.svg)](http://isitmaintained.com/project/tinper-bee/bee-table-tree "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-table-tree.svg)](http://isitmaintained.com/project/tinper-bee/bee-table-tree "Percentage of issues still open")


react bee-table-tree component for tinper-bee

some description...

## 使用方法

```js

class Demo extends Component {
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
                            address: "New York No. 3 Lake Park"
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
            <div className="demo1">
                <TableTree columns={this.columns} data={this.data} />
            </div>
        )
    }
}

```



## API

### bee-table-tree
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|data|传入的表格数据|array|[]|
|columns|列的配置表，具体配置见下表|array|-|


### Column

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|key|列的键|string|-|
|className|传入列的classname|String	|-|
|colSpan|该列的colSpan|Number|-|
|title|列的标题|node|-|
|dataIndex|	显示数据记录的字段|String|-|
|width|宽度的特定比例根据列的宽度计算|String/Number|-|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-table-tree
$ cd bee-table-tree
$ npm install
$ npm run dev
```
