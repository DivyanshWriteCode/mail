import React from 'react'
import "./Sidebar.css"
import { Button, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Duo, Person, Phone } from '@mui/icons-material';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <Button startIcon={<AddIcon fontSize='large'/>} className='sidebar_compose'>Compose</Button>      
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={7}/>
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={4}/>
      <SidebarOption Icon={NearMeIcon} title="Sent" number={5}/>
      <SidebarOption Icon={NoteIcon} title="Notes" number={8}/>
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={84}/>
      <div className='sidebar__footer'>
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person/>
          </IconButton>
          <IconButton>
            <Duo/>
          </IconButton>
          <IconButton>
            <Phone/>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
