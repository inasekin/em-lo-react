import React, { Component } from "react";

export default class Advantages extends Component {
    state = {
        services: [
            {
                title: "Emergency locksmith"
            },
            {
                title: "Lock Change"
            },
            {
                title: "Emergency Lockout"
            },
            {
                title: "Lock Installation"
            },
            {
                title: "Lock Upgrade Of All Locks"
            },
            {
                title: "Lock Opening"
            }
        ]
    };
    render() {
      return (
            <section className="services section section--orange-bg">
                <div className="_container">
                    <h2 className="block-title">Our services</h2>
                    <div className="services__items">
                        <div className="row">
                            {this.state.services.map(item => {
                                return (
                                    <div className="services__item col-md-4">{item.title}</div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}