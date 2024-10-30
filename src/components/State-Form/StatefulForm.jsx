import { useState } from "react";

const StatefulForm = () => {
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [error,setError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password.length < 6){
            setError(email)
        }
        console.log(email);
        console.log(password);
    }
    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input placeholder='Enter' className='border' type="text" name="name" id="" />
                <input onChange={handleEmailChange} placeholder='Enter' className='border' type="email" name="email" id="" />
                <input onChange={handlePasswordChange} placeholder='Enter' className='border' type="password" name="password" id="" />
                <input className='border' type="submit" value="Submit" />
            </form>
            {
                error && <p>You Must Write minimum 6 or more carachters</p>
            }
        </div>
    );
};

export default StatefulForm;