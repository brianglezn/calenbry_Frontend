import React from 'react';
import './Home.scss';

const Header = React.lazy(() => import('../../components/landing/Header'));

export default function Home() {
    return (
        <>
            <Header />
        </>
    );
}
