import React from 'react';
import './sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, Icon, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from '../SidebarChat/SidebarChat';


type HeaderProps = {
  text: string
}

const Sidebar = ( props: HeaderProps) => {
  console.log(props.text);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar src="https://i.ibb.co/G5FDHQZ/Cartoon-character-in-eyeglasses-Concept-of-avatar-of-bearded-man-with-bad-eyesight-Isolated-at-white.jpg"/>
        <div className="sidebar-headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-searchContainer">
          <SearchOutlined />
          <input
            type="text"
            name=""
            placeholder="Search or start new chat"
          />
        </div>
      </div>

      <div className="sidebar-chats">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
    </div>
  );
};

export default Sidebar;