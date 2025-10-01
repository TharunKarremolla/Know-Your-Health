import axios from 'axios';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate()
   
    const user = JSON.parse(localStorage.getItem('user'))
 
    let username = '';
    if (user && user.user.length > 0){
         username = user.user[0].username
        console.log('inside',username)
    }

    useEffect(() => {
        console.log(username)
        if (!user){
            navigate('/Login')
        }
    },[user])
   
    const logout = async() => {
        try{
        const res = await axios.post('https://bug-free-space-engine-56xq9vg4p94h4j56-8000.app.github.dev/api/auth/logout/',{},
            {
                 withCredentials : true,
                 headers : {
                    'X-CSRFToken' : Cookies.get('csrfToken')
                 }
            }
        )
        console.log(res.data)
        localStorage.removeItem('user')
        navigate('/Login')
      
    }catch(error){
        console.log(error)
    }
}
    return (
        <div>
            <nav className={styles.navBar}>
           <h1>Know Your Health</h1>
           <div>
            <Link to='/Labs' className={styles.navlink}>Labs</Link>
            <Link className={styles.navlink} to='/RegisterLab'>RegisterLab</Link>
            <Link className={styles.navlink} to='/MyAppointments'>MyAppointments</Link>
     {username  && <button onClick={logout}>logout</button>}
           </div>
           </nav>

            </div>
    )
}