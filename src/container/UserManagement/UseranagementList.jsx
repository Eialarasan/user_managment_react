import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, getUserList } from "../../redux/reducer/UserReducers";
import action from "../../redux/action";
import { toast } from "react-toastify";
import Loader from "../../component/Loader";
import { getUserData } from "../../redux/reducer/LoginReducers";

const UserManagement = () => {
    const user= useSelector(getUserData)
    const [openAddUserModal,setOpenAddUserModal]=useState(false)
    const [openEditUserModal, setOpenEditUserModal] = useState(false)
    const [userDetails, setuserDetails] = useState({})
    const [search,setSearch]=useState("")
    const UserList=useSelector(getUserList)
    const isLoading=useSelector(getLoading)
    const dispatch=useDispatch()
    useEffect(()=>{
        
      getUserDetails()
        
    },[search])
    
     
    const getUserDetails=(id)=>{
        let params;
        if(user.userDetails?.roleId==2){
             params={
                search,
                id:user?.userDetails?.id
            }
        }else{
            params={
                search,
            }
        }
        
        dispatch(action.UserList(params))
    }
    const UpdateUser=(data)=>{
      setuserDetails(data)
      setOpenEditUserModal(true)
    }

    const deleteUser=(id)=>{
        const params={
           id: id
        }
        const callback=(res)=>{
            if(res?.response_code===0){
                getUserDetails()
            }else{
                toast.error("Sorry something went wrong")
            }
        }
        dispatch(action.DeleteUser(params,callback))
    }
    return (
        <div class="container-fluid  dashboard-content">
            {
                isLoading && <Loader/>
            }
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="page-header">
                        <h2 class="pageheader-title">User List</h2>
                        <div class="page-breadcrumb">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card">
                        <ul class="navbar-nav ml-auto navbar-left-top">
                            <li class="nav-item">
                                {user.userDetails.roleId!==2&&<div className="d-flex">
                                    <div id="custom-search" class="top-search-bar">
                                        <input class="form-control" type="text" 
                                        value={search} onChange={(e) => {
                                            setSearch(e.target.value)
                                            
                                        }} 
                                        placeholder="Search by Name" />
                                    </div>
                                    <div id="custom-search" class="top-search-bar">
                                        <button class="btn btn-primary btn-sm" onClick={()=>setOpenAddUserModal(true)}>Add User</button>
                                    </div>
                                </div>}
                            </li>

                        </ul>

                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered first">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            {user.userDetails.roleId!==2&&<th>Edit</th>}
                                            {user.userDetails.roleId!==2&&<th>Delete</th>}
                                        </tr>
                                    </thead>
                                    <tbody>
                                     {
                                      UserList?.length>0&&  UserList?.map((o)=>{
                                            return <tr>
                                            <td>{o?.id}</td>
                                            <td>{o?.userName}</td>
                                            <td>{o?.phoneNumber}</td>
                                            <td>{o?.email}</td>
                                            <td>{o?.Role?.roleName}</td>
                                                {user.userDetails.roleId!==2&&<td> <button class="btn btn-primary btn-sm"  onClick={() => UpdateUser(o)}>Edit</button></td>}
                                                {user.userDetails.roleId!==2&&<td> <button class="btn btn-primary btn-sm" onClick={() => deleteUser(o?.id)}>Delete</button></td>}
                                            </tr>
                                        })
                                        }{
                                            UserList?.length === 0 && <tr className="tr-shadow">
                                                <td colSpan="10" className="text-center">
                                                    No record found
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                openAddUserModal&&<AddUser
                openModal={openAddUserModal} 
                onClose={()=>{
                    setOpenAddUserModal(false)
                    getUserDetails()
                }}/>
            }
            {
                openEditUserModal && <AddUser
                openModal={openEditUserModal}
                onClose={() =>{
                 setOpenEditUserModal(false)
                 getUserDetails()
                }} 
                userDetails={userDetails}/>
            }
        </div>
    )
}
export default UserManagement;