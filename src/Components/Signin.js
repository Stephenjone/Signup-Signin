import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './Signin.css'

const Signin = () => {
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const[error, setError]=useState("");

  const navigate = useNavigate();

  const handleSignin=(e)=>{
    e.preventDefault();
    const signupData = JSON.parse(localStorage.getItem('signupData')) || [];
    const user = signupData.find(user=>user.email === email && user.password === password);
    if(user)
    {
      alert("Signin successfull")
      setEmail("");
      setPassword("");
      setError("");
      navigate('/home');
    }
    else
    {
      alert ("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className='signin'>
      <h2 className='signin-heading'>Signin page</h2>
      <form  className="signin-form" onSubmit={handleSignin}>
                <input
                    className='signin-email'
                    type="email"
                    name="email"
                    placeholder="Enter email id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br/>
                <input
                    className='signin-password'
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <button className='signin-btn' type="submit">Sign in</button>
            </form>
            {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  )
}

export default Signin