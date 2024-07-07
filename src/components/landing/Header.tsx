import { useState } from 'react';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { Link } from 'react-router-dom';

import './Header.scss';
import logoTextCalenbry from '../../../public/logo-text_calenbry.png';

export default function Header() {
    const [visible, setVisible] = useState(false);

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__logo">
                    <img src={logoTextCalenbry} alt="Calenbry logo" className="header__logo-img" />
                </div>

                <div className="header__menu">
                    <Link to="#product">
                        <Button label="Product" link />
                    </Link>
                    <Link to="#solutions">
                        <Button label="Solutions" link />
                    </Link>
                    <Link to="#prices">
                        <Button label="Prices" link />
                    </Link>
                </div>

                <div className="header__actions">
                    <div className="header__actions-auth">
                        <Link to="/login">
                            <Button label="Log In" text severity="info" />
                        </Link>
                        <Link to="/register">
                            <Button label="Sign Up" raised />
                        </Link>
                    </div>
                    <Button
                        icon="pi pi-bars"
                        className="header__menu-button"
                        onClick={() => setVisible(true)}
                    />
                </div>
            </nav>

            <Sidebar
                visible={visible}
                position="right"
                onHide={() => setVisible(false)} >
                <nav className='header__sidebar-nav'>
                    <div>
                        <Link to="#product">
                            <Button label="Product" link />
                        </Link>
                        <Link to="#solutions">
                            <Button label="Solutions" link />
                        </Link>
                        <Link to="#prices">
                            <Button label="Prices" link />
                        </Link>
                    </div>
                    <div>
                        <Link to="/login">
                            <Button label="Log In" text severity="info" />
                        </Link>
                        <Link to="/register">
                            <Button label="Sign Up" raised />
                        </Link>
                    </div>
                </nav>
            </Sidebar>
        </header>
    );
}
