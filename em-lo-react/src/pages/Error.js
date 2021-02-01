import React from "react";
import Banner from '../components/banner';
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Banner title="ERROR 404! SORRY PAGE NOT FOUND">
      <Link to='/' className="btn-primary">BACK TO HOME</Link>
    </Banner>
  );
};

export default Error;
