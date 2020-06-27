import ax from 'axios';
const Axios = ax.create( {
    baseURL: 'http://localhost:5000/'
} );

export const http = {
    userLogin( data ) {
        return Axios.post( 'login', data );
    },
    userRegistration( data ) {
        return Axios.post( 'register', data );
    },

    // for Product
    product: {
        all( params ){
            return Axios.get( 'products', { params } );
        },
        add( data ) {
            return Axios.post( 'products/add', data );
        },
        delete( id ) {
            return Axios.delete( `products/delete/${id}` );
        }
    },
    category: {
        get( data ) {
            return Axios.post( 'add_category', data );
        }
    },
    addVendor( data ) {
        return Axios.post( 'add_vender', data );
    }
};