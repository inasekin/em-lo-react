import React from 'react';
import AreasItem from '../areas-item';

const AreasList = ({ areas }) => {

    return (
        <section className="areas-block section">
            <div className="_container">
                <div className="areas-block__slides">
                    <ul className="slides">
                        <li>
                        <div className="row">
                            {areas.map(item => {
                                return <AreasItem key={item.id} area={item} />;
                            })}
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default AreasList;