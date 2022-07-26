import React from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div class="row login">
            <div class="col-md-3">
                <div className='flexible-content'>
                    <div className='p-3 text-center login-texts'>
                        <h3 className='m-0'>Globetech </h3>
                        <h3>Company Limited</h3>
                        <p className='mt-5' style={{fontSize:"12px", textTransform:"capitalize"}}>Make yourself digitalized & more effecient</p>
                    </div>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </Link>
                </div>
            </div>
            <div class="col-md-9">
                <div className='text-center login-form'>
                    <form className='form'>
                        <div>
                            <h3>Welcome</h3>
                            <small>Sign in to your account</small>
                            <div className='m-2'>
                                <input className='mb-2' type="email" placeholder='Email'/>
                                <input className='mb-2' type="password" placeholder='Password'/>
                                <div className='d-grid'>
                                    <button className='my-btn text-light login-btn'>Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;