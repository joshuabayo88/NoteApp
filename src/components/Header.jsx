import React from "react";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Home from "./Home";
import CreateArea from "./CreateArea";
import NotesView from "./NotesView";

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function Header() {

  const classes = useStyles();

return (
  
  <header>
  <h1 style={{color: "#2e0807"}}>
  Keeper
  </h1>
  <Breadcrumbs aria-label="breadcrumb" style={{float: "right"}}>
    <Link to="/" style={{color: "#702122"}}>
      Home
    </Link>
    <Link to="/Register" style={{color: "#702122"}}>
      Register
    </Link>
    <Link to="/CreateArea" style={{color: "#702122"}}>
      Create Note
    </Link>
    <Link to="/NotesView" style={{color: "#702122"}}>
      View Notes
    </Link>
  </Breadcrumbs>
  
  </header>
 
);
}

export default Header;
