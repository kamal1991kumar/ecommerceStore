import React from 'react';
import Link from 'next/link';

export default (payload) => {

    const { onSubmit, onInputChange, email, password, message } = payload;

    return (
        <div className='loginPage h-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='logo'>
                <h2>Store</h2>
            </div>
            <form className='card text-white bg-dark w-25 shadow-sm' onSubmit={onSubmit} >
                <div className='card-header'>
                    Login
                </div>
                <div className='card-body'>
                    {message.length === 0 ? null :
                        <p class='text-danger'>
                            <small>{message}</small>
                        </p>
                    }

                    <div className='form-group'>
                        <label >Email address</label>
                        <input type='email' className='form-control'
                            value={email}
                            name='email'
                            onChange={onInputChange}
                            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' className='form-control'
                            value={password}
                            name='password'
                            onChange={onInputChange}
                            //pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                            //title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                            required
                        />
                    </div>
                    <small className='d-block text-right'>
                        <a href='#'>Forget Password</a>
                    </small>
                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <button type='submit' className='btn btn-light'>Submit</button>
                    <Link href='/registration'><button type='button' className='btn btn-dark'>SignUp</button></Link>
                </div>
            </form>
        </div>
    );
};