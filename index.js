'use strict';

const
    fsAtomic = require('fs-atomic'),
    newLine = require('single-trailing-newline');

module.exports = {
    set(desc) {
        return fsAtomic.writeFile('.git/description', newLine(desc));
    }
};
