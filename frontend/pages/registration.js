import React from 'react';
import RegistrationView from '../views/registrationView';
import e from 'express';

export default class extends React.Component {

    state = {
        isLoading: false,
        formData: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        message: ''
    };

    onInputChange = ( e ) => {

        const { value, name } = e.currentTarget;
        this.setState( {
            formData: { ...this.state.formData, [ name ]: value }
        } );
    }

    onFormSubmit = ( e ) => {
        e.preventDefault();
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