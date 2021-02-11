import React, { Component } from "react";
import items from "./data-service";

const ServiceContext = React.createContext();

export default class ServiceProvider extends Component {
    state = {
        services: [],
        loading: true,
        type: "all"
    }

    componentDidMount() {
        let services = this.formatData(items);
        let featuredServices = services.filter(service => service.featured === true);

        this.setState({
            services,
            featuredServices
        });
    }
    
    formatData(items) {
        let tempItems = items.map(item => {
        let id = item.sys.id;
        let service = { ...item.fields, id };
            return service;
        });
            return tempItems;
    };
    getService = slug => {
        let tempServices = [...this.state.services];
        const service = tempServices.find(service => service.slug === slug);
        return service;
    };

    render() {
        return (
            <ServiceContext.Provider value={{...this.state, getService: this.getService}}>
            {this.props.children}
            </ServiceContext.Provider>
        );
    }
}

const ServiceConsumer = ServiceContext.Consumer;

export { ServiceProvider, ServiceConsumer, ServiceContext };

export function withServiceConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ServiceConsumer>
        {value => <Component {...props} context={value} />}
      </ServiceConsumer>
    );
  };
}