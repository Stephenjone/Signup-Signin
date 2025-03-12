import React, { useEffect, useState } from 'react';
import './Data.css'

const Data = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
       const savedData = JSON.parse(localStorage.getItem('signupData')) || [];
       const validateUser = savedData.filter(user=>user.email && user.password)
       setUserData(validateUser);
    }, []);

    const handleRemove = (indexToDelete) => {
        const updatedResult = userData.filter((_, index) => index !== indexToDelete);
        setUserData(updatedResult);
        localStorage.setItem('signupData', JSON.stringify(updatedResult));  // Update localStorage
    };

    return (
        <div className='data'>
            <h2 className='database-heading'>User Database</h2>
            {
                userData.length === 0 ? "Database is empty" : (
                   <table col='2'>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((user, index)=>(
                                <tr key={index}>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td><button className='remove-btn' onClick={()=>handleRemove(index)}>Remove</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                   </table>
                )
            }
        </div>
    );
};

export default Data;

