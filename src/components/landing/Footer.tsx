import { Button } from 'primereact/button';

import './Footer.scss';
import logoTextCalenbry from '../../../public/logo-text_calenbry.png';
import GitHubIcon from '../icons/GitHubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import EnvelopIcon from '../icons/EnvelopIcon';
import SolarPanelIcon from '../icons/SolarPanelIcon';

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
                            icon={<GitHubIcon />}
                            outlined
                            onClick={() => window.open('https://github.com/brianglezn', '_blank')}
                        />
                        <Button
                            icon={<LinkedinIcon />}
                            outlined
                            onClick={() => window.open('https://www.linkedin.com/in/brianglezn/', '_blank')}
                        />
                        <Button
                            icon={<EnvelopIcon />}
                            outlined onClick={() => window.open('mailto:brianglezn@gmail.com', '_blank')}
                        />
                        <Button
                            icon={<SolarPanelIcon />}
                            outlined
                            onClick={() => window.open('https://brian-novoa.com/', '_blank')}
                        />
                    </div>
                </div>
            </div>

        </footer>
    );
}
