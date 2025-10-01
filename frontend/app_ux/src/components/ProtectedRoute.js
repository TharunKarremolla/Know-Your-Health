import  { Navigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';

export default function ProtectedRoute({children}) {
     const [loading, setLoading] = useState(true);
      const [user,setUser] = useState('') 
   

    useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        'https://bug-free-space-engine-56xq9vg4p94h4j56-8000.app.github.dev/api/auth/user/',
        { withCredentials: true } 
      );
      console.log('result', res.data);

      if (res.data.user) {
        setUser(res.data);
        localStorage.setItem('user', JSON.stringify(res.data));
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    } catch (err) {
      console.error(err);
      setUser(null);
    } finally {
      setLoading(false); // stop loading after fetch
    }
  };

  fetchUser(); 
}, []);

      if (loading) return <div>Loading...</div>; 
    console.log('protect',user)

    
         if (!user){
        return <Navigate to="/Login" />;
    }
   
   
    return React.Children.map(children,(child) => child ?  React.cloneElement(child, { user }) : null)
}