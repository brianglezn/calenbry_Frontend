import { Button } from 'primereact/button';

import './Footer.scss';
import logoTextCalenbry from '../../../public/logo-text_calenbry.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className='footer__container'>
                <div className="footer__logo">
                    <img src={logoTextCalenbry} alt="Calenbry logo" />
                </div>
                <div className="footer__socials">
                    <h4>Brian González Novoa</h4>
                    <p>Web Developer</p>
                    <div>
                        <Button
                            icon="pi pi-github"
                            outlined
                            onClick={() => window.open('https://github.com/brianglezn', '_blank')}
                        />
                        <Button
                            icon="pi pi-linkedin"
                            outlined
                            onClick={() => window.open('https://www.linkedin.com/in/brianglezn/', '_blank')}
                        />
                        <Button
                            icon="pi pi-envelope"
                            outlined onClick={() => window.open('mailto:brianglezn@gmail.com', '_blank')}
                        />
                        <Button
                            icon="pi pi-link"
                            outlined
                            onClick={() => window.open('https://brian-novoa.com/', '_blank')}
                        />
                    </div>
                </div>
            </div>

        </footer>
    );
}
