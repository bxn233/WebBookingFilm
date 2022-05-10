import React from 'react'
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function ListQuestion(props) {
    const [open, setOpen] = React.useState(false);
    const {question, answer} = props.question
    const handleClick = () => {
      setOpen(!open);
    }
  return (
    <List
      sx={{ width: "100%", p:0, borderTop: '1px solid rgba(255,255,255,0.4)' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={question} style={{color: 'rgb(255,255,255)', fontWeight:'600'}} />
        {open ? <ExpandLess style={{color: 'rgb(255,255,255)'}}/> : <ExpandMore style={{color: 'rgb(255,255,255)'}}/>}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton>
            <ListItemText primary={answer} style={{color: 'rgb(255,255,255)', fontWeight:'600'}}/>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  )
}
