import React from 'react';
import { Button } from 'primereact/button';

const Header = React.lazy(() => import('../../components/landing/Header'));
const Footer = React.lazy(() => import('../../components/landing/Footer'));

import './Home.scss';
import logo from '../../../public/logo_calenbry.png';

export default function Home() {

    return (<>
        <Header />
        <div className='home'>
            <main className="home__main">
                <h3 className="home-title">CALENBRY FEATURES</h3>
                <h1 className="home-heading">Your trusted <span>appointment manager</span></h1>
                <p className="home__main-description">
                    Calenbry is the automation platform to manage your appointment scheduling, solutions and integrations for each department and advanced security features.
                </p>
                <div className="home__main-buttons">
                    <Button label="Log In" text severity="info" />
                    <Button label="Sign Up" raised />
                </div>
            </main>

            <section className="home__how">
                <h3 className="home-title">AN INTRODUCTION TO CALENBRY</h3>
                <h2 className="home-heading">How Calenbry Works</h2>
                <div className="home__how-content">
                    <div className="home__how-content__step">
                        <div>
                            <span>STEP ONE</span>
                            <h4>Create a Scheduling Link</h4>
                            <p>Connect your calendar and Calenbry will help you create scheduling links and booking pages based on your availability. Share your Calenbry link with others so people can book time with you in one click.</p>
                        </div>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="home__how-content__step">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <div>
                            <span>STEP TWO</span>
                            <h4>Team-based scheduling</h4>
                            <p>Booking links can be based on different event types - from 15-minute Zoom calls to 30-minute in-person meetings – and rules. Include other members of your team, route the meeting to the right people on your team, and collaborate around scheduling requirements.</p>
                        </div>
                    </div>
                    <div className="home__how-content__step">
                        <div>
                            <span>STEP THREE</span>
                            <h4>Workflows and integrations</h4>
                            <p>Workflows and integrations connect Calenbry to your process and other tools. Send reminders, follow-ups, and connect your CRM, video conferencing, and even billing platforms!</p>
                        </div>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="home__how-content__step">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <div>
                            <span>STEP FOUR</span>
                            <h4>Designed for your whole organization</h4>
                            <p>With Calenbry commonly used to power meetings with prospects, customers, recruits and more, it’s ideal to power scheduling for your whole company with meeting analytics, and enterprise-ready admin, security, and IT-oriented features.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </>
    );
}
