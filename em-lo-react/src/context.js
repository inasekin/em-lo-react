import React, { Component } from "react";
import items from "./data";

const AreaContext = React.createContext();

export default class AreaProvider extends Component {
    state = {
        areas: [],
        loading: true,
        type: "all"
    }

    componentDidMount() {
        let areas = this.formatData(items);
        let featuredAreas = areas.filter(area => area.featured === true);

        this.setState({
            areas,
            featuredAreas
        });
    }
    
    formatData(items) {
        let tempItems = items.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);
        let area = { ...item.fields, images, id };
            return area;
        });
            return tempItems;
    };
    getArea = slug => {
        let tempAreas = [...this.state.areas];
        const area = tempAreas.find(area => area.slug === slug);
        return area;
    };

    render() {
        return (
            <AreaContext.Provider value={{...this.state, getArea: this.getArea}}>
            {this.props.children}
            </AreaContext.Provider>
        );
    }
}

const AreaConsumer = AreaContext.Consumer;

export { AreaProvider, AreaConsumer, AreaContext };

export function withAreaConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <AreaConsumer>
        {value => <Component {...props} context={value} />}
      </AreaConsumer>
    );
  };
}