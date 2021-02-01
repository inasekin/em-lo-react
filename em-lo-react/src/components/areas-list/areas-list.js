import React from 'react';
import AreasItem from '../areas-item';

const AreasList = ({ areas }) => {
    return (
        <section className="areas-block section">
            <div className="_container">
            <div className="areas-block__wrapper">
                <div className="row">
                {areas.map(item => {
                    return <AreasItem key={item.id} room={item} />;
                })}
                </div>
                <div className="areas-block__navigations">
                    <div className="areas-block__arrow areas-block__arrow--top"></div>
                    <div className="areas-block__arrow areas-block__arrow--bottom"></div>
                </div>
            </div>
            </div>
        </section>
    );
}
export default AreasList;