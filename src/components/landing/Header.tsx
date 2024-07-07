import { useState } from 'react';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';

import './Header.scss';
import logoTextCalenbry from '../../../public/logo-text_calenbry.png';
import BarsIcon from '../icons/BarsIcon';

export default function Header() {
    const [visible, setVisible] = useState(false);

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__logo">
                    <img src={logoTextCalenbry} alt="Calenbry logo" className="header__logo-img" />
                </div>

                <div className="header__menu">
                    <Button label="Product" link />
                    <Button label="Solutions" link />
                    <Button label="Prices" link />
                </div>

                <div className="header__actions">
                    <div className="header__actions-auth">
                        <Button label="Log In" text severity="info" />
                        <Button label="Sign Up" raised />
                    </div>
                    <Button icon={<BarsIcon />} className="header__menu-button" onClick={() => setVisible(true)} />
                </div>
            </nav>

            <Sidebar
                visible={visible}
                position="right"
                onHide={() => setVisible(false)} >
                <nav
                    className='header__sidebar-nav'>
                    <div>
                        <Button label="Product" link />
                        <Button label="Solutions" link />
                        <Button label="Prices" link />
                    </div>
                    <div>
                        <Button label="Log In" text severity="info" />
                        <Button label="Sign Up" raised />
                    </div>
                </nav>
            </Sidebar>
        </header>
    );
}
