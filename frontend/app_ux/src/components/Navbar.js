import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className={styles.navBar}>
           <h1>Know Your Health</h1>
           <div>
            <Link >Labs</Link>
             <Link>RegisterLab</Link>
             <buton><Link to='/Login'>Login ? SignUp</Link></buton>
           </div>
           </nav>

            </div>
    )
}