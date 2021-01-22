import React from "react";
import Banner from '../components/banner';
import { Link } from "react-router-dom";

const Error = () => {
  return <Hero>
    <Banner title="ERROR" subtitle="SORRY PAGE NOT FOUND">
        <Link to='/' className="btn-primary">BACK TO HOME</Link>
    </Banner>
    </Hero>;
};

export default Error;
