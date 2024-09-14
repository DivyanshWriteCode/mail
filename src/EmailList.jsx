import { IconButton } from '@mui/material'
import React from 'react'
import RedoIcon from '@mui/icons-material/Redo';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Bookmark, CheckBox, ChevronLeft, ChevronRight, Inbox, KeyboardHide, People, Settings } from '@mui/icons-material';
import "./EmailList.css"
import Section from './Section';
import EmailRow from './EmailRow';
const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <IconButton>
            <CheckBox/>
          </IconButton>
            <IconButton>
                <ArrowDropDownIcon/>
            </IconButton>
            <IconButton>
                <RedoIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft/>
          </IconButton>
          <IconButton>
            <ChevronRight/>
          </IconButton>
          <IconButton>
            <KeyboardHide/>
          </IconButton>
          <IconButton>
            <Settings/>
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected/>
        <Section Icon={People} title="Social" color="#1A73E8"/>
        <Section Icon={Bookmark} title="Promotions" color="#1A73E8"/>
      </div>
      <div className="emailList__lisr">
        <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="This Is A Test" time="10PM"/>
        <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="This Is A Test" time="10PM"/>
        <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="This Is A Test" time="10PM"/>
        <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="This Is A Test" time="10PM"/>
        <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="This Is A Test" time="10PM"/>
        <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="This Is A Test" time="10PM"/>
        <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="This Is A Test" time="10PM"/>
        <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="This Is A Test" time="10PM"/>
        <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="This Is A Test" time="10PM"/>
        <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="This Is A Test" time="10PM"/>
        <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="This Is A Test" time="10PM"/>
        <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="This Is A Test" time="10PM"/>
        <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="This Is A Test" time="10PM"/>
      </div>
    </div>
  )
}

export default EmailList
