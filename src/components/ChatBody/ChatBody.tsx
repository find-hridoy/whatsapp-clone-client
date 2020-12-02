import React, { useEffect, useState } from 'react';
import './ChatBody.css'
import Pusher from 'pusher-js';
import Sidebar from '../Sidebar/Sidebar';
import Chat from '../Chat/Chat';




interface IProject {
  type: Array<String>;
  text: String;
}


const ChatBody = (props:any) => {
   
  console.log(props);

  const [messages, setMessages] = useState<IProject[]>([])
  console.log(messages);
  useEffect(()=>{
    fetch("https://fierce-ravine-88768.herokuapp.com/message/show")
    .then(res => res.json())
    .then ( data => setMessages(data))
  }, [])


  useEffect(()=>{
   const pusher = new Pusher('2be980cecf9a2313cfd7', {
     cluster: 'mt1'
   });

   const channel = pusher.subscribe('messages');
   channel.bind('inserted', (result : any ) => {
     setMessages([...messages, result]);
   });
    
   return () =>{
     channel.unbind_all();
     channel.unsubscribe();
   }
  }, [messages])


  return (
    <div className="chatBody">
  
      <div className="chat-area">
        <Sidebar/>
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default ChatBody;
