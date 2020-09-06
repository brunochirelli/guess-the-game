import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand as={Link} to="/">
        Guess Game
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
