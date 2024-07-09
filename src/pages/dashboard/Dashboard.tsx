import { Suspense } from 'react';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Link, Outlet, useLocation } from 'react-router-dom';

import './Dashboard.scss';
import logoTextCalenbry from '../../../public/logo-text_calenbry.png';

const getPageTitle = (pathname: string) => {
    switch (pathname) {
        case '/dashboard/eventTypes':
            return 'Event Types';
        case '/dashboard/events':
            return 'Events';
        case '/dashboard/availability':
            return 'Availability';
        case '/dashboard/analytics':
            return 'Analytics';
        case '/dashboard/adminCenter':
            return 'Admin Center';
        case '/dashboard/profile':
            return 'Profile';
        default:
            return 'Dashboard';
    }
};

export default function Dashboard() {
    const location = useLocation();
    const pageTitle = getPageTitle(location.pathname);

    const isActive = (path: string) => location.pathname === path ? 'active' : '';

    return (
        <div className="dashboard">
            <aside className="dashboard__sidebar">
                <div className="dashboard__logo">
                    <img src={logoTextCalenbry} alt="Calenbry Logo" />
                </div>
                <nav className="dashboard__nav">
                    <div>
                        <Link to="/dashboard">
                            <Button label="Dashboard" icon="pi pi-home" className={`p-button-text ${isActive('/dashboard')}`} />
                        </Link>
                        <Link to="/dashboard/eventTypes">
                            <Button label="Event Types" icon="pi pi-calendar" className={`p-button-text ${isActive('/dashboard/eventTypes')}`} />
                        </Link>
                        <Link to="/dashboard/events">
                            <Button label="Events" icon="pi pi-calendar-plus" className={`p-button-text ${isActive('/dashboard/events')}`} />
                        </Link>
                        <Link to="/dashboard/availability">
                            <Button label="Availability" icon="pi pi-clock" className={`p-button-text ${isActive('/dashboard/availability')}`} />
                        </Link>
                    </div>
                    <div>
                        <Link to="/dashboard/analytics">
                            <Button label="Analytics" icon="pi pi-chart-bar" className={`p-button-text ${isActive('/dashboard/analytics')}`} />
                        </Link>
                        <Link to="/dashboard/adminCenter">
                            <Button label="Admin Center" icon="pi pi-cog" className={`p-button-text ${isActive('/dashboard/adminCenter')}`} />
                        </Link>
                    </div>
                </nav>
            </aside>
            <main className="dashboard__main">
                <div className='dashboard__main-container'>
                    <header className='dashboard__main--header'>
                        <div className="dashboard__main--header__label">
                            <h2>{pageTitle}</h2>
                        </div>
                        <div className="dashboard__main--header__user">
                            <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '1.5rem' }}>
                                <Badge />
                            </i>
                            <Link to="/dashboard/profile">
                                <Avatar icon="pi pi-user" size="large" />
                            </Link>
                        </div>
                    </header>
                    <div className='dashboard__main--content'>
                        <Suspense>
                            <Outlet />
                        </Suspense>
                    </div>
                </div>
            </main>
        </div>
    );
}
