import React from "react";
import { withServiceConsumer } from "../../context-service";
import AdvantagesList from "./advantages-list";

function Advantages({context}) {

    const { services } = context;

    return (
        <>
            <AdvantagesList services={services}/>
        </>
    );
}
export default withServiceConsumer(Advantages);