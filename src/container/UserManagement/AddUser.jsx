import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import action from "../../redux/action";

const AddUser = ({ openModal, onClose, userDetails }) => {
    const [userData, setUserData] = useState({})
    const [error, setError] = useState({})
    const dispatch = useDispatch()
    const toggle = (val) => {
        onClose();
    }


    useEffect(() => {
       if(userDetails?.id){
        const obj={
            userName:userDetails?.userName,
            email:userDetails.email,
            phone:userDetails?.phoneNumber,
            password:userDetails.password,
            role:userDetails.roleId
        }
        setUserData(obj)
    }
    }, [])

    const submit = () => {
        console.log(userData,"userdata")
        if (!userData?.userName) {
            setError({ userName: 'Please enter user name' })
        } else if (!userData.email) {
            setError({ email: 'Please enter email' })
        } else if (!userData.phone) {
            setError({ phone: 'Please enter phone' })
        } else if (!userData.password) {
            setError({ password: 'Please enter password' })
        } else if (!userData.role) {
            setError({ role: 'Please enter role' })
        } else {
            const callback = (res) => {
                if (res?.response_code === 0) {
                    setUserData("")
                    setError("")
                    onClose()
                } else {
                    toast.error("Sorry Something went wrong")
                }
            }
            if (userDetails?.id) {
                const params = {
                    "id": userDetails?.id,
                    "user_name":userData?.userName,
                    "phone_number":Number(userData.phone),
                    "email": userData.email,
                    "password":userData.password,
                    "roleId": userData.role
                }
                dispatch(action.UpdateUser(params, callback))
            } else {
                const params = {
                    "user_name":userData?.userName,
                    "phone_number": Number(userData?.phone),
                    "email": userData?.email,
                    "password":userData?.password,
                    "roleId": userData?.role
                }
                dispatch(action.AddUser(params, callback))
            }
        }
    }

   
    return (
        <Modal show={openModal} centered={true}>
            <ModalHeader>
                <h5 >{userDetails?.id?"Update user":"Add User"}</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={() => toggle(false)} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </ModalHeader>
            <ModalBody>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">User Name</label>
                    <input className="form-control form-control-lg" name="username" id="username"
                        type="text"
                        placeholder="Username" autoComplete="off"
                        onChange={(e) => {
                            setUserData({...userData, userName: e?.target?.value})
                            setError({userName:''})
                        }} value={userData?.userName} />

                    {error && <p style={{ color: 'red' }}>{error?.userName}</p>}
                </div>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Email</label>
                    <input className="form-control form-control-lg"
                        type="email"
                        placeholder="email" autoComplete="off"
                        onChange={(e) => {
                            setUserData({...userData, email: e?.target?.value })
                            setError({ email: "" })
                        }} value={userData?.email} />

                    {error && <p style={{ color: 'red' }}>{error?.email}</p>}
                </div>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Phone number</label>
                    <input className="form-control form-control-lg"
                        type="number"
                        placeholder="phone number" autoComplete="off"
                        onChange={(e) => {
                            setUserData({...userData, phone: e?.target?.value })
                            setError({ phone: "" })
                        }} value={userData?.phone} />

                    {error && <p style={{ color: 'red' }}>{error.phone}</p>}
                </div>
               {!userDetails?.id&& <div class="form-group">
                    <label for="inputText3" class="col-form-label">Password</label>
                    <input  className="form-control form-control-lg"
                        name="password" id="password"
                        type={"password"} placeholder="Password" onChange={(e) => {
                            setUserData({...userData, password: e?.target?.value })
                            setError({ password: '' })
                        }} value={userData?.password} />
                    
                </div>}
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Role</label>
                    <select className="form-control form-control-lg"
                        type="number"
                        placeholder="phone number" autoComplete="off"
                        onChange={(e) => {
                            setUserData({...userData, role: e?.target?.value })
                            setError({ role: "" })
                        }} value={userData?.role} >
                        <option>Select role</option>
                        <option value='1'>Admin</option>
                        <option value='2'>User</option>
                    </select>

                    {error && <p style={{ color: 'red' }}>{error.role}</p>}
                </div>

            </ModalBody>
            <ModalFooter>
                <button class="btn btn-primary btn-sm" onClick={() => submit()}>Submit</button>
            </ModalFooter>
        </Modal >
    )
}
export default AddUser