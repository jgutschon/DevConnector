import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify(user);
      const res = await axios.post('/api/auth', body, config);

      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <form className="form" onSubmit={(event) => onSubmit(event)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(event) => onChange(event)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(event) => onChange(event)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </Fragment>
  );
};

export default Login;
