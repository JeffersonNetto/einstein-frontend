import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      Home
      <Link to="/login">Login</Link>
      <Link to="/movimentos">Movimentos</Link>
    </>
  );
};

export default Home;
