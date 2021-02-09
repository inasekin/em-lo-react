import React from "react";
import items from "../../data";

const ListOfAreas = () => {

    return (
        <section className="Who-block section section--blue-bg ">
            <div className="_container">
            <h2 className="block-title text--align-center">Areas we cover</h2>
            <div className="footer-services col-12">
                <ul id="list-area" className="row">
                    {items.map(item => 
                    <li key={item.id + "_" + Math.random()} className="col-3">
                        <a href={item.fields.url} key={item.id}>
                            {item.fields.name}
                        </a>
                    </li>
                    )}
                </ul>
            </div>
            </div>
        </section>
    );
}

export default ListOfAreas;