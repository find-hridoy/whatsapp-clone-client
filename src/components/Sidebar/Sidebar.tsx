import React, { useContext } from 'react';
import './sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, Icon, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from '../SidebarChat/SidebarChat';
import { UserContext } from '../../App';




const Sidebar = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar src={ loggedInUser.img}/>
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