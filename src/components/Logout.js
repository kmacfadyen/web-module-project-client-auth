import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Logout = () => {


    useEffect(() => {

        const token = localStorage.getItem('token');
        const { push } = useHistory();

        axios.post('http://localhost:5000/api/logout', {}, {
            headers: {
                authorization: token
            }
        })
            .then (res => {
                // console.log(res);
                localStorage.removeItem('token');
                push('/login');
            })
            .catch (err => console.log(err))
    }, []);

    return (<div>

    </div>)
}

export default Logout;