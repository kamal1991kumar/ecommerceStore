import React from 'react';
import { http, constants } from 'config';
import _ from 'lodash';
import Link from 'next/link';
import DashBoardLayout from 'layouts/DashBoardLayout';

export default class extends React.Component {

    render() {
        return (
            <DashBoardLayout>
                <div className='row'>
                    <div className='col col-6'>
                        <div className='card'>
                            <div className='card-body border-bottom'>
                                <h4 className='mb-0'>Categories</h4>
                            </div>
                            <div className='card-body'>
                                <div className='input-group'>
                                    <input className='form-control'
                                        placeholder='Type here category'
                                    />
                                    <button className='btn btn-primary'>Add</button>
                                </div>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </DashBoardLayout>
        );
    }

}