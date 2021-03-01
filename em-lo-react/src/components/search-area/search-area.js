import React, { Component } from 'react';

export default class SearchArea extends Component {


    render() {
        const searchText = 'Type here to search your Area!';
        const searchStyle = {
            fontSize: '20px'
        };

        return (
            <div className="container">
                <div className="search-area">
                    <input placeholder={ searchText }
                           className="foo"/>
                </div>
            </div>
        );
    }
}