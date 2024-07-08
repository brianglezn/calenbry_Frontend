import { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { FloatLabel } from "primereact/floatlabel";
import { Button } from 'primereact/button';

import './AuthForms.scss';
import Footer from '../../components/landing/Footer';
import Header from '../../components/landing/Header';

export default function Register() {
    const [loading, setLoading] = useState<boolean>(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <>
            <Header />
            <section className="auth">
                <div className="auth__container">
                    <h3>Sing Up</h3>
                    <form action="">
                        <FloatLabel>
                            <InputText
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor="username">Username</label>
                        </FloatLabel>
                        <FloatLabel>
                            <InputText
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="email">Email</label>
                        </FloatLabel>
                        <FloatLabel>
                            <Password inputId="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password">Password</label>
                        </FloatLabel>
                        <Button
                            label="Let's go!"
                            icon="pi pi-check"
                            loading={loading}
                            onClick={load} />
                    </form>
                    <div>
                        <p>Don't have an account?</p>
                        <Link to='/login'>Sing in</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
