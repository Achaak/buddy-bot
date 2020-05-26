import React from 'react';
import { Link } from "react-router-dom";
import { Button, withStyles } from '@material-ui/core'
import { lightBlue } from '@material-ui/core/colors';

import "./Header.scss"

const links = [
  {
    link: "/",
    icon: "home"
  }, {
    link: "/direction",
    icon: "gamepad"
  }
]

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    '&:hover': {
      backgroundColor: lightBlue[800],
    },
    '&:active': {
      backgroundColor: lightBlue[600],
    },
    height: "50px",
    minWidth: "50px",
    margin: "0 5px",
    padding: "5px",
    fontSize: "1.3rem",
    lineHeight: "1.5",
    borderRadius: "50%"
  },
}))(Button);

const Header = () => {

  return (
    <header>
      {links.map((link, linkKey) => (
        <ColorButton>
          <Link
            key={linkKey}
            to={ link.link || "#" } 
          >
            <i className={`fas fa-${link.icon}`}></i>
          </Link>
        </ColorButton>
      ))}
    </header>
  )
}

export default Header