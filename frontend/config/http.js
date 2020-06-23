import ax from 'axios';
const Axios = ax.create( {
    baseURL: 'http://localhost:5000/'
} );

export const http = {
    userLogin( data ) {
        return Axios.post( 'login', data );
    }
};