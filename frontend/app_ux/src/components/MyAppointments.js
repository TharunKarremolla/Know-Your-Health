import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'


export default function MyAppointments() {
    const get_data = async () => {
        try {
        const res = await axios.get('https://bug-free-space-engine-56xq9vg4p94h4j56-8000.app.github.dev/api/MyAppointments/',{
            withCredentials : true
        })
    console.log(res.data)
    }catch(error){
        console.log(error)
    }
    }

    useEffect(()=>{
        get_data();
    },[])
    return (
        <div>
           <h1>MyAppointments Page </h1>
            </div>
    )
}