import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'


export default function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    
    const handleLogin = async () => {
        console.log(Cookies.get('csrfToken'))
         if (!username || !password) {
    alert("Please enter username and password");
    return;
  }
        try{
        const res = await axios.post('https://bug-free-space-engine-56xq9vg4p94h4j56-8000.app.github.dev/api/auth/login/',{username,password},
            {
                withCredentials : true,
                 headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': Cookies.get('csrfToken'),
  }
            }
        )
        console.log(res.data)
        localStorage.setItem('user',JSON.stringify(res.data.username))
        navigate('/Home')
    }catch(error){
        console.log('error ;',error)
    } }
    return (
        <div className={styles.login}>
               <img src={logo} width={394} alt='logo' />
           <div>
          <input type='text' placeholder='username' onChange={(e)=>setUsername(e.target.value)}></input>
          <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input>
             <button onClick={handleLogin}>Login</button>
             <p>Existing User ? <Link to='/Register'>SignUp</Link></p>
           </div>
         

            </div>
    )
}