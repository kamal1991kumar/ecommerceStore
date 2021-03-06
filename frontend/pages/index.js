import React from 'react';
import { http, constants, localStore } from 'config';
import LoginView from 'views/LoginView';
import _ from 'lodash';

export default class LoginPage extends React.Component{

    state = {
        isLoding: true,
        email: 'kamal1991kumar@gmail.com',
        password: 'raj',
        message: ''
    };

    onInputChange = ( e ) => {

        const { value, name } = e.currentTarget;
        this.setState( { [ name ]: value, message: '' } );
    }

    onSubmit = ( e ) => {
        e.preventDefault();

        const { email, password } = this.state;

        http.userLogin( { email, password } ).then( ( { data } ) => {

            const { status, message, payload } = data;

            const _state = _.cloneDeep( this.state );

           if( constants.SUCCESS === status ) {

                localStore.setUser( payload.data );
                
                this.props.router.push('/dashboard');

           } else {

            _state.message = message;

           }

           this.setState( _state );

        } );

    }

    render() {

        return(
            <LoginView
                { ...this.state }
                onSubmit={ this.onSubmit }
                onInputChange={ this.onInputChange }
            />
        );

    }

}