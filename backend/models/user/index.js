const router = require("express").Router();
const User = require('./schema');
const app = require('../../config');
const mailer = require( '../../mailer' );
const _ = require('lodash');
const response = app.responseData;

router.post('/register',  async ( req, res  ) => {

    try {

        const user = new User( req.body );
        const message =  await user.validation( req.body );
                await user.save();
        res.status(200).send( response.success( message ) );

    } catch( error ) {
        console.log( error );
        res.status(202).send( response.failure( error ) );

    }

} );

router.post('/login',  async( req, res  ) => {

    try {

        const { email, password } = req.body;

        const user =  await User.verifyCredentials( email, password );
        const _response = response.success();
            _response.payload.data = user;
        
        res.status(200).send( _response );

    } catch( error ) {

        res.status(202).send( response.failure( error ) );

    }

} );

router.get('/password_reset',  async( req, res  ) => {

    try {

        const { email } = req.query;
        const user =  await User.verifyEmail( email );
        const _response = response.success( 'Please check your email.' );
            
        const _send = await mailer.send( {
            to: user.email,
            subject: 'Please reset your password',
            templateName: 'resetPassword',
            data: {
                url:`password_reset/${email}`
            }
        } );
               
        res.status(200).send( _response );

    } catch( error ) {

        res.status(202).send( response.failure( error ) );

    }

} );

router.post('/password_reset/:email',  async( req, res  ) => {

    try {

        const { email } = req.params;
        const { password, confirmPassword } = req.body;
        const _verifyId =  await User.verifyResetEmail( email, password, confirmPassword );
        
        res.status(200).send( response.success('Your password has been successfully updated.') );

    } catch( error ) {

        res.status(400).send( response.failure( error ) );

    }

} );

router.get('/',  async( req, res  ) => {

    try {

        const _users =  await User.find().select({
            password: 0,
            confirmPassword: 0,
            token: 0
        });
        const _response = response.success();

        _.set( _response, 'payload.data.users', _users );

        res.status(200).send( _response );

    } catch( error ) {

        res.status(400).send( response.failure( error ) );

    }

} );

module.exports = router;