
const app = require('./index');
const _ = require('lodash');

module.exports = {
    success( message ) {

        const output = {
            status: app.constants.SUCCESS,
            message: message || 'Data has been successfly load',
            payload: {}
        };

        return _.cloneDeep( output );
    },
    failure( message ) {

        const output = {
            status: app.constants.FAILURE,
            message: message
        }

        return _.cloneDeep( output );
    }
};