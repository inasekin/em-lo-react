import React from "react";
import { withAreaConsumer } from "../../context";
import AreasList from "../areas-list";

function AreaContainer({ context }) {
  const { areas } = context;
  return (

    <>
        <div className="container">
            <AreasList areas={areas}/>
        </div>
    </>
  );
}

export default withAreaConsumer(AreaContainer);



