'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rootDir;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rootDir() {
    return process.mainModule.paths[0].split('server')[0].slice(0, -1);
}

/*
	Not yet working
*/

function getRootDir() {
    var pt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __dirname;
    var sf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var p = _path2.default.resolve(pt);
    var packageFound = false;
    var selfInstanceFound = sf;

    var fps = _fs2.default.readdirSync(p);
    for (var i = 0; i < fps.length; i++) {
        var fp = fps[i];
        if (!selfInstanceFound && fp === 'package.json') {
            packageFound = true;
            break;
        } else {
            packageFound = false;
        }
    }

    if (!selfInstanceFound && !packageFound) {
        var pp = _path2.default.resolve(p, '..');
        getRootDir(_path2.default.resolve(p, '..'), selfInstanceFound);
    } else if (!selfInstanceFound && packageFound) {
        selfInstanceFound = true;
        var _pp = _path2.default.resolve(p, '..');
        getRootDir(_pp, selfInstanceFound);
    } else if (selfInstanceFound && packageFound) {
        return p;
    }
}