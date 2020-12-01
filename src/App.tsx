import React, { useEffect } from 'react';
import './app.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Pusher from 'pusher-js';

 function App () {
   useEffect(()=>{
    const pusher = new Pusher('2be980cecf9a2313cfd7', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data : string) => {
      alert(JSON.stringify(data));
    });
   }, [])
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
