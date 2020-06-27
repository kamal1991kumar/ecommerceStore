import React from 'react';
import HeaderView from '../views/HeaderView';
import SidebarView from '../views/SidebarView';

export default (props) => {

    return (
        <>
            <HeaderView />
            <div className='container-fluid h-100'>
                <div className='row h-100'>
                    <div className='col-md-2 py-md-3 border-right'>
                        <SidebarView />
                    </div>
                    <div className='col-md-10'>
                        <div className='p-5'>
                            {props.children}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

}