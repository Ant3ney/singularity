'use client';

import React from 'react';
import Link from 'next/link';

type PageHeaderProps = {
	title: string;
};

const PageHeader = (props: PageHeaderProps) => {
        return (
            <section className="inner-banner">
                <span className="banner-two__shape-1"></span>
                <span className="banner-two__shape-2"></span>
                <span className="banner-two__shape-3"></span>
                <span className="banner-two__shape-4"></span>
                <div className="container">
                    <ul className="list-unstyled thm-breadcrumb">
                        <li><Link href="/">Home</Link></li>
                        <li className="active"><span>{props.title}</span></li>
                    </ul>
                    <h2 className="inner-banner__title">{props.title}</h2>
                </div>
            </section>

        )
}
export default PageHeader;
