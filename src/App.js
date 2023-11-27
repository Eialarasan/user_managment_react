import { Route, Routes } from 'react-router';
import './App.css';
import Login from './container/Login';
import Register from './container/Register';
import Layout from './component/Layout';
import "./asset/css/bootstrap.min.css";
import "./asset/css/style.css";
import "./asset/css/custom.css";
import UserManagement from './container/UserManagement/UseranagementList';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  
    return (
        <div>
           
                       <Routes>
                <Route path='/' element={<Login />}>
                </Route>
                <Route path='/register' element={<Register />}>
                </Route>
                <Route path='/' element={<Layout />}>
                    <Route path='/usermanagement' element={<UserManagement />} />
                </Route>
            </Routes>
          <ToastContainer/>
        </div>
    );
}

export default App;
