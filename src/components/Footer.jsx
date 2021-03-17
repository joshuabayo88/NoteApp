import React from "react";
import Button from '@material-ui/core/Button';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p style={{color: "#702122"}}>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
