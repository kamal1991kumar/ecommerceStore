import React from 'react';
import { http, constants, utils } from 'config';
import _ from 'lodash';
import DashBoardLayout from 'layouts/DashBoardLayout';
import AddProductView from 'views/product/AddProductView';

export default class extends React.Component {

    state = {
        isLoading: false,
        message: '',
        isVaild: false,
        formData: {
            name: '',
            description: '',
            price: 0,
            comparePrice: 0,
            costPerItem: 0,
            category: '',
            vendor: '',
            quantity: 0
        },
        categories: [],
        vendors: []
    };

    componentWillMount() {
        
    }

    onInputChange = ( e ) => {

        const { value, name } = e.currentTarget;
        this.setState( {
            formData: { ...this.state.formData, [ name ]: value },
            message: ''
        } );
    }

    onFormSubmit = ( e ) => {
        e.preventDefault();

        this.setState( { isLoading: true }, () => {
            http.product.add( this.state.formData ).then( ( { data } ) => {

                const { status, message } = data;
    
                const _state = _.cloneDeep( this.state );
                    _state.message = message;
                    _state.isLoading = false;
    
               if( constants.SUCCESS === status ) {
    
                    _state.isVaild = true;
    
               }
    
               this.setState( _state );
    
            } );
        } );

    }

    render() {
        return (
            <DashBoardLayout>
                <AddProductView
                    { ...this.state }
                    onFormSubmit={ this.onFormSubmit }
                    onInputChange={ this.onInputChange }
                />
            </DashBoardLayout>
        );
    }

}