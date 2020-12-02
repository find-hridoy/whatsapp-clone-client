import { Avatar, IconButton } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import './Chat.css'
import AttachFile from '@material-ui/icons/AttachFileOutlined';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicIcon from '@material-ui/icons/Mic';
import { UserContext } from '../../App';



interface Iinput {
  type: Array<String>;
  text: String;
}




const Chat = (props: any) => {

  const [loggedInUser, setLoggedInUser]:any = useContext<any>(UserContext);

  const [input, setInput] = useState<string>('')

  const sendMessage = (e: any) => {
  fetch("https://fierce-ravine-88768.herokuapp.com/message/new", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    message: input,
    name: "Hulk",
    timestamp: "12.05",
    revived: false

    })
  })
    
    console.log('Clicked');
    e.preventDefault();
  }

 

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
        {
          props.messages.map((message:any) => (
            <p className={`chat-message ${message.name && 'chat-receiver'}`}>
              <span className='chat-name'>{ message.name}</span>
            {message.message}
            <span className="chat-timestamp">
              {message.timestamp}
            </span>
          </p>
          ))
       }

      </div>

      <div className="chat-footer">
      <IconButton size="small">
        <InsertEmoticonIcon />
        </IconButton>
        <form action="">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button
            onClick={sendMessage}
            type="submit">
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