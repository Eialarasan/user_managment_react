import React from 'react'
import { Outlet } from "react-router-dom"
import Header from '../Header'
import SideNavBar from "../Navbar"
 const Layout = () => {
    return (
        <div class="dashboard-main-wrapper">
            <Header />
            <SideNavBar />
            <div class="dashboard-wrapper">
                <Outlet />
            </div>
        </div>
    )
}
export default Layout