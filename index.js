const ethers = require('ethers');

exports.default = {
  add: function (a, b) {
    return a + b;
  },
}

// 写一个最简单的ether.js的使用,使用exports
// Path: index.js
const ethers = require('ethers');
exports.default = {
  ethers: ethers,
}