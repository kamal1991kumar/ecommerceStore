import React from 'react';
import Button from 'views/Button';

export default (payload) => {

    const { onFormSubmit, formData, onInputChange, isVaild, message, isLoading } = payload;

    return (
        <form onSubmit={onFormSubmit}>
            {message.length === 0 ? null :
                <div class={`alert alert-${isVaild ? 'success' : 'error'} pl-1  pr-1 pt-0 pb-0`}>
                    <small>{message}</small>
                </div>
            }
            <div className='d-flex mb-3'>
                <h3 className='flex-fill mb-0'>Add Product</h3>
                <Button className='btn btn-success btn-sm' type='submit' isLoading={isLoading}>
                    Save
                </Button>
            </div>
            <div className='row'>
                <div className='col col-8'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-12'>
                                    <label className='form-label'>Product Name</label>
                                    <input type='text' className='form-control' required
                                        name='name'
                                        value={formData.name}
                                        onChange={onInputChange}
                                    />
                                </div>
                                <div className='col-12 mt-3'>
                                    <label className='form-label'>Description</label>
                                    <textarea className='form-control'
                                        required
                                        name='description'
                                        value={formData.description}
                                        onChange={onInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card mt-3'>
                        <div className='card-body'>
                            <h5>Media</h5>
                            <div className='row mt-3'>
                                <div className='col-12'>
                                    <div class="form-file mb-3">
                                        <input type="file" class="form-file-input" id="customFileLg" />
                                        <label class="form-file-label" for="customFileLg">
                                            <span class="form-file-text">Choose file...</span>
                                            <span class="form-file-button">Browse</span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card mt-3'>
                        <div className='card-body'>
                            <h5>Price</h5>
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <label className='form-label'>Price</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">₹</span>
                                        <input type="number" class="form-control"
                                            required
                                            name='price'
                                            min='1'
                                            value={formData.price}
                                            onChange={onInputChange}
                                        />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <label className='form-label'>Compare at price</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">₹</span>
                                        <input type="number" class="form-control"
                                            required
                                            name='comparePrice'
                                            min='1'
                                            value={formData.comparePrice}
                                            onChange={onInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <label className='form-label'>Cost per item</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">₹</span>
                                        <input type="number" class="form-control"
                                            required
                                            name='costPerItem'
                                            min='1'
                                            value={formData.costPerItem}
                                            onChange={onInputChange}
                                        />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <label className='form-label'>&nbsp;</label>
                                    <div className='d-flex form-text'>
                                        <div className='flex-fill'>
                                            <small className='d-block'>Margin</small>
                                            <small>12%</small>
                                        </div>
                                        <div className='flex-fill'>
                                            <small className='d-block'>Profit</small>
                                            <small>12%</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col col-4'>
                    <div className='card bg-light'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-12'>
                                    <label className='form-label'>Category</label>
                                    <input type='text' className='form-control' />
                                </div>
                                <div className='col-12 mt-3'>
                                    <label className='form-label'>Vendor</label>
                                    <input type='text' className='form-control' />
                                </div>
                                <div className='col-12 mt-3'>
                                    <label className='form-label'>Quantity</label>
                                    <input type='number' className='form-control' required
                                        name='quantity'
                                        min='1'
                                        value={formData.quantity}
                                        onChange={onInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}