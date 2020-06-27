import React from 'react';

export default () => {
    return (
        <div className='card bg-light'>
            <div className='card-body'>
                <label className='form-label'>Add Category</label>
                <input type='email' className='form-control' id='inputEmail4' />
                <button className='btn btn-primary btn-sm mt-3'>Add</button>
            </div>
        </div>
    );
}