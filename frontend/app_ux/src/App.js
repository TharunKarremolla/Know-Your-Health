import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Labs from './components/Labs';
import styles from './App.module.css';
import RegisterLab from './components/RegisterLab';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import axios from 'axios';
import Schedule from './components/Schedule';
import Cookies from 'js-cookie';
import MyAppointments from './components/MyAppointments';

function App() {
   
useEffect(() => {
   axios.get('https://bug-free-space-engine-56xq9vg4p94h4j56-8000.app.github.dev/api/auth/csrf/',{
    withCredentials : true
   }).then((res)=>Cookies.set('csrfToken',res.data.csrfToken))
},[])
    
  return (
    <div className="App">
          <Router>
         <Navbar/>

        <Routes>
            <Route path='/' element={<Main />}>
            </Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Register' element={<Register />}></Route>
            <Route path='/Labs' element={<Labs />}></Route>
            <Route path='/RegisterLab' element={<RegisterLab /> }></Route>
            <Route path='/Schedule' element={<ProtectedRoute  ><Schedule /></ProtectedRoute>}></Route>
             <Route path='/Home' element={<ProtectedRoute  ><Home /></ProtectedRoute>}></Route>
              <Route path='/MyAppointments' element={<ProtectedRoute  ><MyAppointments /></ProtectedRoute>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
