import React from 'react';
import './style.scss';
import LoginForm from '../../section/Login/LoginForm';
import InfoSection from '../../section/Login/InfoSection';

const LoginPage = () => {
    return (
        <div className="login-page">

            <InfoSection />
            <LoginForm />
        </div>
    );
};

export default LoginPage;
