import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const actions = [
    {
        href: '/dashboard/products',
        name: 'Products'
    },
    {
        href: '/dashboard/products/categories_and_vendors',
        name: 'Categories And Venders'
    }
];

export default () => {

    const router = useRouter();

    return (
        <div class="nav flex-column nav-pills">
            {
                actions.map( ( action ) => {

                    const { name, ...rest } = action;

                    return(
                        <Link {...rest}>
                            <a className={ `nav-link ${action.href === router.pathname ? 'active' : ''}` }>
                                { name }
                            </a>
                        </Link>
                    );
                } )
            }
        </div>
    );
}