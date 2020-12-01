import React, { useEffect, useState } from 'react';
import './app.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Pusher from 'pusher-js';

interface IProject {
  type: Array<string>;
  text: String;
}
 function App () {
   const [messages, setMessages] = useState<IProject[]>([]);
   useEffect(()=>{
     fetch("http://localhost:5000/message/show")
     .then(res => res.json())
     .then ( data => setMessages(data))
   }, [])
   useEffect(()=>{
    const pusher = new Pusher('2be980cecf9a2313cfd7', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (result : any ) => {
      // alert(JSON.stringify(result));
      setMessages([...messages, result]);
    });
    return () =>{
      channel.unbind_all();
      channel.unsubscribe();
    }
   }, [messages])
  //  console.log(messages);
  return (
    <div className="app">
      <div className="app-body">
        <Sidebar text="hello world"/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
