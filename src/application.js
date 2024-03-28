import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Application = (props) => {
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');

    useEffect(() => {
       
        axios({
            method: 'GET',
            url: 'http://localhost:8081',
            withCredentials: true
        })
        .then(response => {
           

            if (response.data.user.nameID)
            {
                setEmail(response.data.user.nameID);
                setLoading(false);
            }
            else
            {
                RedirectToLogin();    
            }
        })
        .catch(error => {
           
            RedirectToLogin();
        })
    }, []);

    const RedirectToLogin = () => {
        window.location.replace('http://localhost:8081');
    }

    if (loading)
        return <p>loading ...</p>

    return (
        <p>Hello {email}!</p>
    );
}

export default Application;