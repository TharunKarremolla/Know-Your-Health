import axios from 'axios';
import styles from './Schedule.module.css';
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie'


export default function Schedule({user}) {
    console.log('user data', user)
    const { user: [userData] = [] } = user || {};
    const location = useLocation();
    const { labData } = location.state || {};
    const lab = labData.lab_id

    const patient_id =userData.id
    const patient_email = userData.email
    const [appointment_at,setTime] = useState('')

    console.log('data : ',patient_id,appointment_at,lab,patient_email)
    
    const handleSubmit = async () => {
        try{
        const res = await axios.post('https://bug-free-space-engine-56xq9vg4p94h4j56-8000.app.github.dev/api/appointments/',{patient_id,appointment_at,lab,patient_email},
            { 
                withCredentials : true,
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken' : Cookies.get('csrfToken'),
                }
            }
        )       
    }catch(error){
        console.log(error)
    }}
    return (
        <div className={styles.schedDiv}>
            <h1>Schedule</h1>
            <input type='datetime-local' placeholder='select time' value={appointment_at} onChange={(e) => {setTime(e.target.value)}} />
            <br></br>
            <button onClick={handleSubmit}>Submit</button>
           
            </div>
    )
}