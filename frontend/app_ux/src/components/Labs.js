import styles from './Labs.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Labs() {
    const [details,setDetails] = useState([])
   
    const fetch_labs = async() =>{
        try{
        const res = await axios.get('https://bug-free-space-engine-56xq9vg4p94h4j56-8000.app.github.dev/api/labs/',{
            withCredentials : true
        })
     
        setDetails(res.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetch_labs();
    },[])


    return (
        <div className={styles.labDiv}>
         
          {/* <h1>labs</h1> */}
          {details.map((detail) => (
            <div key={detail.id}>
                <h3>{detail.name}</h3>
                <p>{detail.address}</p>
                <Link to='/Schedule' state={{labData : { lab_id : detail.id}}}><button>Schedule</button></Link>
                </div>
          ) )}
         
      
        

            </div>
    )
}