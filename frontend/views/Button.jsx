import React from 'react';

export default function Button(payload) {

    const { children, isLoading, ...attr } = payload;

    return (
        <button {...attr} disabled={isLoading}>
            {
                isLoading ?
                    <>
                        <span class="spinner-border spinner-border-sm" /> &nbsp;Loading...
                    </> :
                    children
            }
        </button>
    );
}

Button.defaultProps = {
    isLoading: false
}
