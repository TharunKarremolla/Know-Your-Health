import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { usestate } from 'react';

export default function Labs() {

    // const fetch_labs = async() =>{
    //     const awa
    // }


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