import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className={styles.navBar}>
           <h1>Know Your Health</h1>
           <div>
            <Link to='/Labs'>Labs</Link>
             <Link>RegisterLab</Link>
             <button><Link to='/Login'>Login ? SignUp</Link></button>
           </div>
           </nav>

            </div>
    )
}