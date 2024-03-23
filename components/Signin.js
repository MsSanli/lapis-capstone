/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <img src="/img/signinone.png" alt="Signin" className="img-fluid mb-3" style={{ maxWidth: '800px' }} />
      <Button type="button" size="lg" className="copy-btn glow" variant="dark" onClick={signIn}>
        Welcome
      </Button>
    </div>
  );
}

export default Signin;
