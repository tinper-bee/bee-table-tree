# bee-table-tree
树表结构可以用来展示多数组嵌套的数据，是信息便于阅读与理解
## 代码演示
## API
### bee-table-tree
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|data|传入的表格数据|array|[]|
|columns|列的配置表，具体配置见下表|array|[]|

### Column

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|key|列的键|string|-|
|className|传入列的classname|String	|-|
|colSpan|该列的colSpan|Number|-|
|title|列的标题|node|-|
|dataIndex|	显示数据记录的字段|String|-|
|width|宽度的特定比例根据列的宽度计算|String/Number|-|