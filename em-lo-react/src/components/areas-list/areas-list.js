import React, { Component }from 'react';
import AreasItem from '../areas-item';

export default class AreasList extends Component {

    constructor() {
        super();

        this.state = {
            search: null
        };
    }

    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
    }

    render() {

        const { areas } = this.props;

        const searchText = 'Type here to search your Area!';
        const searchStyle = {
            fontSize: '20px'
        };

        const items = areas.filter((item)=>{
            if(this.state.search == null)
                return item
            else if(item.name.toLowerCase().includes(this.state.search.toLowerCase()) || item.name.toLowerCase().includes(this.state.search.toLowerCase())){
                return item
            }
        }).map(item=>{
            return <AreasItem key={item.id} area={item} />;
        })
        // {areas.map(item => {
        //     return <AreasItem key={item.id} area={item} />;
        // })}

        return (
            <section className="areas-block section">
                <div className="_container">
                    <div className="search-area">
                        <input placeholder={ searchText } style={ searchStyle } className="foo" onChange={(e)=>this.searchSpace(e)} />
                    </div>
                    <div className="areas-block__slides">
                        <ul className="slides">
                            <li>
                                <div className="row">
                                    {items}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}