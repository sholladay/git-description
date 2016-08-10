'use strict';

const fsAtomic = require('fs-atomic');
const newLine = require('single-trailing-newline');

module.exports = {
    set(desc) {
        return fsAtomic.writeFile('.git/description', newLine(desc));
    }
};
