import { Link } from 'react-router-dom';
import logo from './logo.png';
import axios from 'axios';
import { useState } from 'react';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate()
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = async() => {
        try{
        const res = await axios.post('https://bug-free-space-engine-56xq9vg4p94h4j56-8000.app.github.dev/api/auth/users/',{username,password,email})
        console.log(res.data)
        navigate('/Login')

    }catch(error){
        console.log(error)
    }}
    return (
        <div className={styles.register}>
            <img src={logo} width={394} alt='logo' />
           <div>
           
          <input type='text' placeholder='username' onChange={(e)=>setUsername(e.target.value)}></input>
           <input type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}></input>
          <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input>
             <button onClick={handleSubmit}>SignUp</button>
             <p>New User? <Link to='/Login'>Login</Link></p>
           </div>
         

            </div>
    )
}