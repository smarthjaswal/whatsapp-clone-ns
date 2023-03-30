import React from 'react'
import "./Sidebar.css"
import SidebarChat from './SidebarChat';
import { Avatar, IconButton } from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { PeopleTwoTone } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';


function Sidebar({ id, name, addNewChat }) {
    const [chatRoom, setchatRoom] = useState([]);

    // useEffect(() => {
    //     db.collection("rooms").onSnapshot((snapshot) =>
    //         setRooms(
    //             snapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 data: doc.data(),
    //             }))
    //         )

    //     );
    // }, []);
    const roomCollectionreff = collection(db,"rooms");
    useEffect(()=>{
        const getRoomName = async ()=>{
            try{
                const data = await getDocs(roomCollectionreff);
                const filterData = data.docs.map((doc)=>({
                    ...doc.data(),
                    id:doc.id,
                }));
                setchatRoom(...filterData);
                console.log(...filterData);
            } catch(err){
                console.log(err);
            }
        };
        getRoomName();

    },[]);






    // const [rooms, setRooms] = useState([]);

    // useEffect(() => {
    //     const unsubscribe = db.collection('rooms').get().then((snapshot) => {
    //         setRooms(
    //             snapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 data: doc.data(),
    //             }))
    //         )

    //         });


    //     return () =>{
    //         unsubscribe();
    //     }
    // }, []);


    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />

                <div className="sidebar_headerRight">
                    <IconButton>
                        <PeopleTwoTone />
                    </IconButton>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or start a new chat" type="text" />
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat />
                {/* console.log(rooms); */}
                {chatRoom.map(Chat => (
                    <SidebarChat key={Chat.id} id={Chat.id} name={Chat.data.name} />
                ))}



            </div>




        </div>
    )
}

export default Sidebar
