import React from 'react';
import ServiceItem from './service-item';

const AdvantagesList = ({services}) => {
    return (
        <section className="services section section--blue-bg">
        <div className="_container">
            <h2 className="block-title">Our services</h2>
            <div className="services__items">
                <div className="row">
                    {services.map(item => {
                        return <ServiceItem key={item.id} service={item} />;
                    })}
                </div>
            </div>
        </div>
        </section>
    );
}

export default AdvantagesList;


