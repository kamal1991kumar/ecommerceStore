
export const localStore = {
    w: function() {
        return window.localStorage;
    },
    setUser( data ) {
        this.w().setItem( '_userInfo', JSON.stringify( data ) );
    }
}