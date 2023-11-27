import React, {useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import eyopen from '../../asset/images/eye.png'
import hide from '../../asset/images/hide.png'
import { useNavigate } from "react-router-dom";
import action from '../../redux/action';
import { store } from '../../createStore';


const Login = () => {
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [showPasswordState, setShowpasswordstate] = useState(true)
    const [errorUser, setErrorUser] = useState('')
    const [errorPass, setErrorPass] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        let token = store?.getState()?.LOGIN?.authToken?.access_token
        if (token) {
            navigate('/usermanagement')
        }
    }, [])

    const managePassword = () => {
        if (showPasswordState) {
            setShowpasswordstate(false)
        } else {
            setShowpasswordstate(true)
        }
    }



    const login = () => {
        if (!email) {
            setErrorUser("Please enter email")
        } else if (!password) {
            setErrorPass("Please enter your password")
        } else {
            const params = {
                email: email,
                password: password
            }
            const callback = (res) => {
                if (res?.response_code === 0) {
                    navigate('/usermanagement')
                } else {
                    setErrorPass(res?.response_message)
                }
            }
            dispatch(action.Login(params, callback))
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
                            <input className="form-control form-control-lg" name="email" id="email"
                                type="email"
                                placeholder="email" autoComplete="off"
                                onChange={(e) => {
                                    setemail(e?.target?.value)
                                    setErrorUser('')
                                }} value={email} />
                        </div>
                        {errorUser && <p style={{ color: 'red' }}>{errorUser}</p>}
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
                        </div>
                        {errorPass && <p style={{ color: 'red' }}>{errorPass}</p>}
                        <div className="form-group">
                            <a href="/register" class="footer-link" >Create Account?</a>
                        </div>
                        <button className="btn btn-primary btn-lg btn-block" style={{ "padding": "11px 131px" }} onClick={() => login()}>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login