import React from 'react';
import Link from 'next/link';

export default (payload) => {

    const { onFormSubmit, onInputChange, formData, isRegister, message } = payload;

    return (
        <div className='registrationPage h-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='logo'>
                <h2>Store</h2>
            </div>
            <form className='card w-25 shadow-sm' onSubmit={onFormSubmit} >
                <div className='card-header'>
                    Registration
                </div>
                <div className='card-body'>
                    { message.length === 0 ? null : 
                    <p class={ !isRegister ? 'text-danger' : 'text-success' }>
                        <small>{ message }</small>
                    </p>
                    }
                    
                    <div className='row'>
                        <div className='col'>
                            <div className='form-group'>
                                <label>First Name</label>
                                <input type='text' className='form-control'
                                    value={formData.firstName}
                                    name='firstName'
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-group'>
                                <label>Last Name</label>
                                <input type='text' className='form-control'
                                    value={formData.lastName}
                                    name='lastName'
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label >Email address</label>
                        <input type='email' className='form-control'
                            value={formData.email}
                            name='email'
                            onChange={onInputChange}
                            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                            required
                        />
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='form-group'>
                                <label>Password</label>
                                <input type='text' className='form-control'
                                    value={formData.password}
                                    name='password'
                                    onChange={onInputChange}
                                    pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                                    title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                                    required
                                />
                            </div>

                        </div>
                        <div className='col'>
                            <div className='form-group'>
                                <label>Confirm Password</label>
                                <input type='password' className='form-control'
                                    value={formData.confirmPassword}
                                    name='confirmPassword'
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <button type='submit' className='btn btn-success'>Register</button>
                    <Link href='/'><button type='button' className='btn btn-dark'>Login</button></Link>
                </div>
            </form>
        </div>
    );
}