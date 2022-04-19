import { Button } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocicalLogin from '../../SocialLogin/SocicalLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [agree, setAgree] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const handleSignIn = () => {
        const email = emailRef.current.value;
        const password = email.current.value;
        signInWithEmailAndPassword(email, password)
    }
    if (loading) {
        return <p>Loading....</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='container mx-auto    row mx-autod  d-flex justify-content-center '>
            <div className=' col-sm-12 col-lg-6 border shadow pb-5 px-5 '>
                <h1 className='text-primary text-center'>Please LogIn</h1>
                <Form onSubmit={handleSignIn} className='mb-2'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept terms and condition" />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!agree} className='w-100'>
                        Submit
                    </Button>
                </Form>
                {error && <p className='text-danger text-center'>{error.message}</p>}
                <div>
                    <Link to='/register' className='text-success text-decoration-none pt-2 '>Create an account</Link>
                </div>
                <SocicalLogin></SocicalLogin>
            </div>

        </div>
    );
};

export default Login;