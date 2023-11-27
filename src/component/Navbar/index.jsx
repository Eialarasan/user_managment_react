import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const SideNavBar = () => {
    const location = useLocation()
   
    return (
        <>
            <div className="nav-left-sidebar sidebar-dark">
                <div className="menu-list">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-divider">
                                    Menu
                                </li>
                                <li className="nav-item ">
                                    <Link to={'/usermanagement'} className={location.pathname === '/usermanagement' ? "nav-link active" : "nav-link"}>User management</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default SideNavBar