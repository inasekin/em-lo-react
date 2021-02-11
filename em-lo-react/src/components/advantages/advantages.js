import React, { Component } from "react";
import items from "../../data-service";

export default class Advantages extends Component {
    render() {
      return (
            <section className="services section section--blue-bg">
                <div className="_container">
                    <h2 className="block-title">Our services</h2>
                    <div className="services__items">
                        <div className="row">
                            {items.map(item => {
                                return (
                                    <div className="services__item col-md-4">{item.fields.name}</div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }
}