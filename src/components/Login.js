import axios from "axios";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const { push } = useHistory();

    const [cred, setCred] = useState({
        username:'',
        password:''
    });

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log('hi');

        axios.post('http://localhost:5000/api/login', cred)
            .then(res => {
                // console.log(res);
                localStorage.setItem('token', res.data.payload);
                push('/friends');
            })
            .catch(err => console.log(err));
    }

    // console.log(cred);

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username</label>
            <input onChange={handleChange} name='username' id='username'/>
          </div>
  
          <div>
            <label htmlFor='password'>Password</label>
            <input onChange={handleChange} name='password' type='password' id='password'/>
          </div>
  
          <button>Submit</button>
  
        </form>
      </div>
    )
  }

  export default Login;