import React from 'react'
import io from 'socket.io-client'
import { useState } from 'react';
import './Chat.css'
import Chatbox from './Chatbox';

const socket=io.connect("http://localhost:3001")
function Chat() {
    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("")
    const [showChat, setShowChat] = useState(false)
    const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room)
      setShowChat(true)
    }
  }
  return (
    <div className="chat-full">
      {!showChat ? (<div className="joinChatContainer"><h3>Join a chat</h3>
        <input type="text" placeholder='john' onChange={(e) => { setUsername(e.target.value); } } />
        <input type="text" placeholder='Room id' onChange={(e) => { setRoom(e.target.value); } } />
        <button onClick={joinRoom}>Join a room</button>
      </div>) 
        :
        (<Chatbox socket={socket} username={username} room={room} />)
      }
      
    </div>
  )
}

export default Chat