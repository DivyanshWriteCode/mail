import { CheckBox, LabelImportant, StarBorder } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import "./EmailRow.css"
import { useHistory } from "react-router-dom";
const EmailRow = ({title, subject, description, time}) => {

    // const history = useHistory();

  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <IconButton>
            <CheckBox/>
        </IconButton>
        <IconButton>
            <StarBorder/>
        </IconButton>
        <IconButton>
            <LabelImportant/>
        </IconButton>
      </div>

      <h3 className="emailRow__title">
        {title}
      </h3>

      <h4 className="emailRow__message">
        {subject}
      </h4>
      
      {/* <span className="emailRow__description">
        {description}
      </span> */}
      
      <span className="emailRow__time">
        {time}
      </span>
    </div>
  )
}

export default EmailRow
