import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

export default function Register() {
    return (
        <div>
            <img src={logo} width={394} alt='logo' />
           <div>
          <input type='text' placeholder='username'></input>
           <input type='email' placeholder='email'></input>
          <input type='password' placeholder='password'></input>
             <buton><Link to='/Login'>SignUp</Link></buton>
             <p>New User? <Link to='/Login'>Login</Link></p>
           </div>
         

            </div>
    )
}