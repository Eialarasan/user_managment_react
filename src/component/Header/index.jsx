import React from "react";
import { getUserData } from "../../redux/reducer/LoginReducers";
import { useDispatch, useSelector } from "react-redux";
import Avatar from '../../asset/images/avatar.png'
import action from "../../redux/action";
import { useNavigate } from "react-router";


const Header = () => {
    const user= useSelector(getUserData)
    const navigate=useNavigate()
    const dispatch=useDispatch()
   const logout=()=>{
    dispatch(action.logout())
    navigate("/")
   }
    return (
        <div className="dashboard-header">
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <a className="navbar-brand">User Management</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto navbar-right-top">
                        <li className="nav-item dropdown nav-user">
                            <a className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={Avatar} alt="" className="user-avatar-md rounded-circle"/>    {user?.userDetails?.userName}  </a>
                           
                        </li>
                        <li className="nav-item dropdown nav-user">
                            <a className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => logout()}>Logout</a>

                            </li>
                    </ul>
                </div>
            </nav>
           
        </div>
    )
}
export default Header