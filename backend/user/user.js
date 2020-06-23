const mongoose = require( 'mongoose' );
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword: String,
    token: String
}, {
    versionKey: false
});

userSchema.pre( 'save', async function( next ) {

    const user = this;
    user.password = await bcrypt.hash(user.password, 8);
    user.token = await jwt.sign( { _id: user._id }, process.env.JWT_KEY );

    next();

} );

userSchema.methods.validation = async function() {

    const { email } = this;
    const user = await User.findOne( { email } );

    if( user ) {

        throw 'User has been already register with us.';
    }

    return 'Yor are successfully register with us.';
};

userSchema.statics.verifyEmail = async function( email ) {

    const user = await User.findOne( { email } );

    if( !user ) {

        throw 'Provide register Email-Id';

    }

    return user;

};

userSchema.statics.verifyResetEmail = async function( email, password, confirmPassword ) {
    const user = await User.findOne( { email } );

    if( !user ) {

        throw 'You have changed some thing  in password reset url';

    }

    user.password = password;
    user.confirmPassword = confirmPassword;

    await user.save();

    return user;
}

userSchema.statics.verifyCredentials = async function( email, password ) {

    const user = await User.findOne( { email } );

    if( !user ) {

        throw 'Invalid Email-Id';

    }
    
    const passwordMatch = await bcrypt.compare( password, user.password );

    if(!passwordMatch) {

        throw 'Invalid Password';
    }

    return user;

};

const User = mongoose.model( 'User', userSchema );

module.exports = User;