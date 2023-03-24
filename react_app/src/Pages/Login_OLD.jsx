import React, { useState } from 'react'
import logo from '../logo.svg';

import axios from '../Api/axios';
import { useNavigate } from 'react-router-dom';

function Login({ loginStatus }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const handleSubmit = async (event) => {
        event.preventDefault();

        await csrf();


        try {
            await axios.post('/login', { email: email, password: password });
            setEmail("");
            setEmail("");
            navigate('/home')
        } catch (e) {
            console.log('Error: ' + e)
            if (e.response.status === 422) {
                console.log(e.response.data);
                setErrors(e.response.data.errors)
            }

            else if (e.response.status === 419) {
                console.log(e.response.data);
                setErrors({ 'message': e.response.data.message })
            }
            else {
                loginStatus(true);
            }
        }
    }

    return (

        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <div className="card">
                    <form className="form-group" onSubmit={handleSubmit}>
                        <div className="card-header">
                            <h5>User Login Form</h5>
                        </div>
                        <div className="card-body">
                            {
                                errors.message && <h4 className='text-danger'>{errors.message}</h4>
                            }
                            <div className="form-group">
                                <label for="my-input-email">Email:</label>
                                <input id="my-input-email"
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {
                                    errors.email &&
                                    <div className="text-danger">{errors.email}</div>
                                }
                            </div>
                            <div className="form-group">
                                <label for="my-input-pass">Password</label>
                                <input id="my-input-pass"
                                    className="form-control"
                                    type="text"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {
                                    errors.password &&
                                    <div className="text-danger">{errors.password}</div>
                                }
                            </div>
                        </div>
                        <div className="card-footer text-right">
                            <button className='btn btn-primary' type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login