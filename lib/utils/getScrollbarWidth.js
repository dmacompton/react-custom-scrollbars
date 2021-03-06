'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getScrollbarWidth;

var _domCss = require('dom-css');

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollbarWidth = false;

var DEFAULT_WIDTH = 15;

function getScrollbarWidth(devicesHaveChanged) {
    return DEFAULT_WIDTH;
    if (scrollbarWidth !== false && !devicesHaveChanged) return scrollbarWidth;
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        var div = document.createElement('div');
        (0, _domCss2.default)(div, {
            width: 100,
            height: 100,
            position: 'absolute',
            top: -9999,
            overflow: 'scroll',
            MsOverflowStyle: 'scrollbar'
        });
        document.body.appendChild(div);
        scrollbarWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
    } else {
        scrollbarWidth = DEFAULT_WIDTH;
    }
    return scrollbarWidth || DEFAULT_WIDTH;
}