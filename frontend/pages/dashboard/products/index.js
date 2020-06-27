import React from 'react';
import { http, constants } from 'config';
import _ from 'lodash';
import Link from 'next/link';
import DashBoardLayout from 'layouts/DashBoardLayout';

export default class extends React.Component {

    state = {
        isLoading: true,
        products: []
    };

    componentWillMount() {
        this.getAllProducts();
    }

    getAllProducts = () => {
        http.product.all().then(({ data }) => {

            const { status, message, payload } = data;

            const _state = _.cloneDeep(this.state);
            _state.message = message;
            _state.isLoading = false;

            if (constants.SUCCESS === status) {

                _state.products = payload.data;

            }

            this.setState(_state);

        });
    }

    onProductDelete = ( id ) => {
        http.product.delete( id ).then(({ data }) => {
            if (constants.SUCCESS === data.status) {
                this.props.router.reload( this.props.router.pathname );
            }
        });
    }

    render() {
        return (
            <DashBoardLayout>
                <div className='d-flex mb-3'>
                    <h3 className='flex-fill mb-0'>Products</h3>
                    <Link
                        href='/dashboard/products/[productFormPage]'
                        as='/dashboard/products/add'
                    >
                        <button className='btn btn-secondary btn-sm'>
                            Add Product
                    </button>
                    </Link>
                </div>

                <div className='card'>
                    <div className='card-body border-bottom'>
                        <div class="input-group d-flex">
                            <input type="text" class="form-control flex-fill"
                                placeholder='Filter Product'
                            />
                            <select class="form-select">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <table className='table mb-0 table-hover'>
                        <thead>
                            <tr>
                                <th width='100'>&nbsp;</th>
                                <th>Product</th>
                                <th>Inventory</th>
                                <th>Category</th>
                                <th>Vendor</th>
                                <th width='130'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.length === 0 ?
                                <tr>
                                    <td className='text-center' colSpan={5}>No data Found.</td>
                                </tr>
                                : this.state.products.map((item) => {
                                    return (
                                        <tr key={item._id}>
                                            <td className='pl-3'>
                                                <img
                                                    src='http://placehold.jp/12/6c757d/ffffff/50x50.png?text=img'
                                                    className='img-thumbnail mr-3'
                                                    alt='img'
                                                />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.quantity} in Stock</td>
                                            <td>{item.category}</td>
                                            <td>{item.vendor}</td>
                                            <td>
                                                <div class="btn-group">
                                                    <Link
                                                        href='/dashboard/products/[productFormPage]'
                                                        as={`/dashboard/products/edit?id=${item._id}`}
                                                    >
                                                        <button class="btn btn-sm btn-outline-dark">
                                                            <i className='fa fa-pencil' />
                                                        </button>
                                                    </Link>
                                                    <Link
                                                        href='/dashboard/products/[productFormPage]'
                                                        as={`/dashboard/products/clone?id=${item._id}`}
                                                    >
                                                        <button class="btn btn-sm btn-outline-dark">
                                                            <i className='fa fa-clone' />
                                                        </button>
                                                    </Link>
                                                    <button class="btn btn-sm btn-outline-dark"
                                                        onClick={ () => this.onProductDelete(item._id)}
                                                    >
                                                        <i className='fa fa-trash' />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </DashBoardLayout>
        );
    }

}