import { Avatar } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './SidebarChat.css';
import db from '../firebase';

function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 4000));


    }, []);


    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if(roomName){
            // do some database stuff
            db.collections("rooms").add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <div className="Sidebar_Chat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div  className="SidebarChat_info">
                <h2>room name</h2>
                <p>Last message...</p>
            </div>
        </div>
        
    ) : (
        <div onClick={createChat} className="Sidebar_Chat">
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat
