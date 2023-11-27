import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import action from '../../redux/action';
import eyopen from '../../asset/images/eye.png'
import hide from '../../asset/images/hide.png'


const Register = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [showPasswordState, setShowpasswordstate] = useState(true)
    const [errorUser, setErrorUser] = useState('')
    const [errorPass, setErrorPass] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPhone, setErrorPhone] = useState('')
    const [errorRole, setErrorRole] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')


    const dispatch = useDispatch()
    const navigate = useNavigate()


    const managePassword = () => {
        if (showPasswordState) {
            setShowpasswordstate(false)
        } else {
            setShowpasswordstate(true)
        }
    }

    const register = () => {
        if (!username) {
            setErrorUser("Please enter username")
        } else if (!email) {
            setErrorEmail("Please enter your email")
        } else if (!phoneNumber) {
            setErrorPhone("Please enter your phone number")
        } else if (!password) {
            setErrorPass("Please enter your password")
        } else if (!role) {
            setErrorRole("Please enter your role")
        } else {
            const params = {
                "user_name": username,
                "phone_number": 1234567890,
                "email": email,
                "password": password,
                "roleId":role
            }
            const callback = (res) => {
                if (res?.response_code === 0) {
                    setEmail("")
                    setUserName('')
                    setPassword('')
                    setErrorPass('')
                    navigate('/')
                } else {
                    setErrorPass(res?.message)
                }
            }
            dispatch(action.register(params, callback))
        }
    }


    return (
        <div className="login-body">
            <div className="splash-container">
                <div className="card ">
                    <div className="card-header text-center">
                        <h3>User Management</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <input className="form-control form-control-lg" name="username" id="username"
                                type="text"
                                placeholder="Username" autoComplete="off"
                                onChange={(e) => {
                                    setUserName(e?.target?.value)
                                    setErrorUser('')
                                }} value={username} />
                        </div>
                        {errorUser && <p style={{ color: 'red' }}>{errorUser}</p>}
                        <div className="form-group">
                            <input className="form-control form-control-lg"
                                type="email"
                                placeholder="email" autoComplete="off"
                                onChange={(e) => {
                                    setEmail(e?.target?.value)
                                    setErrorEmail('')
                                }} value={email} />
                        </div>
                        {errorEmail && <p style={{ color: 'red' }}>{errorEmail}</p>}
                        <div className="form-group">
                            <input className="form-control form-control-lg"
                                type="number"
                                placeholder="phone number" autoComplete="off"
                                onChange={(e) => {
                                    setPhoneNumber(e?.target?.value)
                                    setErrorPhone('')
                                }} value={phoneNumber} />
                        </div>
                        {errorPhone && <p style={{ color: 'red' }}>{errorPhone}</p>}
                        <div className="form-group">
                            <div className="p-relative">
                                <input className="form-control form-control-lg"
                                    name="password" id="password"
                                    type={showPasswordState ? "password" : 'text'} placeholder="Password" onChange={(e) => {
                                        setPassword(e?.target?.value)
                                        setErrorPass('')
                                    }} value={password} />
                                {showPasswordState ?
                                    <img className='login-show-password' alt='' src={eyopen} height={"20px"} width={"20px"} onClick={() => managePassword()}></img>
                                    : <img className='login-show-password' alt='' src={hide} height={"20px"} width={"20px"} onClick={() => managePassword()}></img>
                                }
                            </div>

                           
                            <br />
                            <div className='form-group'>
                                <select className="form-control form-control-lg"
                                    type="number"
                                    placeholder="phone number" autoComplete="off"
                                    onChange={(e) => {
                                        setRole( e?.target?.value)
                                        setErrorRole( "")
                                    }} value={role} >
                                    <option>Select role</option>
                                    <option value='1'>Admin</option>
                                    <option value='2'>User</option>
                                </select>

                                {errorRole && <p style={{ color: 'red' }}>{errorRole}</p>}
                            </div>
                            <div className="form-group">
                                <a href="/" class="footer-link" >Back to Login</a>
                            </div>
                        </div>
                        {errorPass && <p style={{ color: 'red' }}>{errorPass}</p>}
                        <button className="btn btn-primary btn-lg btn-block" style={{ "padding": "11px 131px" }} onClick={() => register()}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Register