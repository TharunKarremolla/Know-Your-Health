import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

export default function Login() {
    return (
        <div>
               <img src={logo} width={394} alt='logo' />
           <div>
          <input type='text' placeholder='username'></input>
          <input type='password' placeholder='password'></input>
             <buton><Link to='/Login'>Login</Link></buton>
             <p>Existing User ? <Link to='/Register'>SignUp</Link></p>
           </div>
         

            </div>
    )
}