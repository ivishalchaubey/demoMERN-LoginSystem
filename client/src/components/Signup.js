import React, { useState } from 'react'
import { SignupUser } from '../api/api'

const Signup = () => {
    const [inputValue, setInputValue] = useState({
        username: '',
        fullName: '',
        gender: '',
        email: '',
        bob: '',
        password: '',
        confirmPassword: '',
    })

    const registerBTN = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }

    const registerUser = async (e) => {
        e.preventDefault()
        const { username, fullName, email, password, confirmPassword, gender, dob } = inputValue;
        if (username !== '' && fullName !== '' && email !== '' && password !== '' && confirmPassword !== '' && gender !== '' && dob !== '') {
            if (password === confirmPassword) {
                let response = SignupUser({
                    username,
                    fullName,
                    email,
                    dob,
                    gender,
                    password
                })
                let data = await response
                alert(data.data)
                setInputValue({
                    username: '',
                    fullName: '',
                    email: '',
                    gender: '',
                    password: '',
                    dob:'',
                    gender:'',
                    confirmPassword: '',
                })
            } else {
                alert("Password and Confirm Password Does not matched...")
            }
        }else{
            alert("All Fields are required..")
        }

    }
    return (
        <div className='container'>
            <form className='p-4 w-50 m-auto' onSubmit={registerUser}>
                <h2 className='text-center my-4'>Register Here..</h2>
                <input type="text" className='form-control my-3' placeholder='Enter Your Username' name='username' onChange={(e) => registerBTN(e)} value={inputValue.username} />
                <input type="text" className='form-control my-3' placeholder='Enter Your Full Name' name='fullName' onChange={(e) => registerBTN(e)} value={inputValue.fullName} />
                <input type="email" className='form-control my-3' placeholder='Enter Your Email' name='email' onChange={(e) => registerBTN(e)} value={inputValue.email} />

                <select className="form-select" onChange={(e) => registerBTN(e)} name="gender" value={inputValue.gender}>
                    <option selected value="">Select Your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <div className='my-3'>
                    <label htmlFor="birthday">Birthday: </label>
                    <input type="date" id="birthday" name="dob" className='form-control' onChange={(e) => registerBTN(e)} value={inputValue.dob}/>
                </div>

                <input type="password" className='form-control my-3' placeholder='Enter Your Password' name='password' onChange={(e) => registerBTN(e)} value={inputValue.password} />
                <input type="password" className='form-control my-3' placeholder='Confirm Password' name='confirmPassword' onChange={(e) => registerBTN(e)} value={inputValue.confirmPassword} />
                <input type="submit" value='Register' className='form-control my-3 bg-primary p-2 text-light' />
            </form>
        </div>
    )
}

export default Signup