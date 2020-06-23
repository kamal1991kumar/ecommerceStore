const nodemailer = require('nodemailer');
const template = require( './templates' );
const app = require('../config');

const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.USER_NAME,
        pass: process.env.USER_PASSWORD
    }
});

module.exports.send = async function( payload ) {

    const { templateName, data, ...rest } = payload;

    const _options = {
        from: process.env.USER_NAME,
        ...rest,
        html: template[ templateName ]( data )
    };

    transporter.sendMail( _options, function (err, info) {
        if(err)
            console.log(err);
        else
            console.log(info);
    });

};