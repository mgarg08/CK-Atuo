import React from 'react';
import SignUpSection from "../../section/Signup/SignUpSection";
import { ReactComponent as CkLogo } from "../../assests/Ck-auto-logo.svg";
import './style.scss';

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <CkLogo />
      <SignUpSection />
    </div>
  );
};

export default SignUpPage;
