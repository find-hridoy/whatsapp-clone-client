import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Chat.css'
import AttachFile from '@material-ui/icons/AttachFileOutlined';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicIcon from '@material-ui/icons/Mic';


const Chat: React.FC = () => {
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />
        <div className="chat-headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat-headerRight">
        <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat-body">
        <p className="chat-message">
          <span className='chat-name'>Redoy</span>
          This is a message
          <span className="chat-timestamp">
            {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat-message chat-receiver">
          <span className='chat-name'>Naiem</span>
          This is a message
          <span className="chat-timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>

      <div className="chat-footer">
      <IconButton size="small">
        <InsertEmoticonIcon />
        </IconButton>
        <form action="">
          <input
            placeholder="Type a message"
            type="text"
          />
          <button type="submit">
            Send a message
          </button>
        </form>
        <IconButton size="small">
        <MicIcon/>
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;