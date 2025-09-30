import axios from 'axios';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'

export default function Navbar() {
   
    
     console.log(localStorage.getItem('user'))
    
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
        setUser(null)
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
         
           </div>
           </nav>

            </div>
    )
}