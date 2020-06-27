import React from 'react';
import { http, constants } from 'config';
import _ from 'lodash';
import Link from 'next/link';
import DashBoardLayout from 'layouts/DashBoardLayout';

export default class extends React.Component{

    render() {
        return (
            <DashBoardLayout>
                hi
            </DashBoardLayout>
        )
    }

}