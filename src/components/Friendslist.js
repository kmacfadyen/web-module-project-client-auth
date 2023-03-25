import React, { useEffect, useState } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/AxiosWithAuth";

const FriendsList = () => {

    const [ friends, setFriends ] = useState();

    useEffect(() => {

        const token = localStorage.getItem('token');

        axiosWithAuth().get('/friends')
            .then (res => {
                // console.log(res);
                setFriends(res.data);
            })
            .catch (err => {
                console.log(err);
            });

    }, []); // only works on mount

    return (
        <div>
            <h2>FriendsList</h2>
            <ul>
                {
                    friends.map(friend => {
                        return <li>{friend.name} - {friend.age}  - {friend.email}</li>
                 
                    })
                }

            </ul>
        </div>
    )
}

export default FriendsList;