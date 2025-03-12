import React, { useEffect, useState } from 'react';
import './Signup.css'

const Signup = () => {
    const [signupData, setSignupData] = useState(JSON.parse(localStorage.getItem('signupData')) || []);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        localStorage.setItem('signupData', JSON.stringify(signupData));
    }, [signupData]);

    const handleSignup = (e) => {
        e.preventDefault();

        // Check if email and password are filled and email is unique
        if (email && password && !signupData.some(user => user.email === email)) {
            alert("Signup successful");
            const updatedSignupData = [...signupData, {email, password}];

            setSignupData(updatedSignupData);  // Add new user to the state
            setEmail("");
            setPassword("");
        } else if (!email || !password) {
            alert("Please fill all the details");
        } else {
            alert("Email already exists");
        }
    };

    return (
        <div className='signup'>
             <h2 className='signup-heading'>Signup page</h2>
            <form className="signup-form" onSubmit={handleSignup}>
                <input
                    className='signup-email'
                    type="email"
                    name="email"
                    placeholder="Enter email id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='signup-password'
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="signup-btn" type="submit">Sign up</button>
            </form>
        </div>
    );
};

export default Signup;
