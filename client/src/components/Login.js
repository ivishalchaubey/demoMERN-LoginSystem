import React, { useState } from 'react';
import { LogInUser } from '../api/api';

const Login = () => {
    const [inputValue, setInputValue] = useState({
        username: '',
        password: ''
    })
    const dataBTN = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }
    const loginBtn = async (e) => {
        e.preventDefault()
        let response = LogInUser(inputValue)
        let data = await response;
        alert(data.data)
        setInputValue({
            username: '',
            password: ''
        })
    }
    return (
        <div className='container'>
            <form action="" method='POST' className='p-4 w-50 m-auto' onSubmit={loginBtn}>
                <h2 className='text-center my-4'>Login Here..</h2>
                <input type="text" className='form-control my-3' placeholder='Enter Your Username' name='username' onChange={(e) => dataBTN(e)} value={inputValue.username}/>
                <input type="password" className='form-control my-3' placeholder='Enter Your Password' name='password' onChange={(e) => dataBTN(e)} value={inputValue.password}/>
                <input type="submit" value='Login' className='form-control my-3 bg-primary p-2 text-light' />
            </form>
        </div>
    )
}

export default Login