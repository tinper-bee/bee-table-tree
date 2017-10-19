'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeTable = require('bee-table');

var _beeTable2 = _interopRequireDefault(_beeTable);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    columns: _propTypes2["default"].array.isRequired,
    data: _propTypes2["default"].array.isRequired
};
var defaultProps = {
    columns: [],
    data: []
};

var TableTree = function (_Component) {
    _inherits(TableTree, _Component);

    function TableTree(props) {
        _classCallCheck(this, TableTree);

        return _possibleConstructorReturn(this, _Component.call(this, props));
    }

    TableTree.prototype.render = function render() {
        var _props = this.props,
            columns = _props.columns,
            data = _props.data;

        return _react2["default"].createElement(_beeTable2["default"], { columns: columns, data: data });
    };

    return TableTree;
}(_react.Component);

;
TableTree.propTypes = propTypes;
TableTree.defaultProps = defaultProps;
exports["default"] = TableTree;
module.exports = exports['default'];