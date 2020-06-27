import React from 'react';
import RegistrationView from 'views/RegistrationView';
import { http, constants } from 'config';
import _ from 'lodash';

export default class RegistrationPage extends React.Component {

    state = {
        isLoading: false,
        formData: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        message: '',
        isRegister: false
    };

    onInputChange = ( e ) => {

        const { value, name } = e.currentTarget;
        this.setState( {
            formData: { ...this.state.formData, [ name ]: value },
            message: ''
        } );
    }

    onFormSubmit = ( e ) => {
        e.preventDefault();

        http.userRegistration( this.state.formData ).then( ( { data } ) => {

            const { status, message, payload } = data;

            const _state = _.cloneDeep( this.state );
                _state.message = message;

           if( constants.SUCCESS === status ) {

            _state.isRegister = true;
            _state.formData = {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            };

           }

           this.setState( _state );

        } );

    }

    render() {
        return (
            <RegistrationView
                { ...this.state }
                onFormSubmit={ this.onFormSubmit }
                onInputChange={ this.onInputChange }
            />
        );
    }

}