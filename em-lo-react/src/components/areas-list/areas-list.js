import React, {Component} from 'react';
import areaImage from '../../img/area-image.jpg';

export default class AreasList extends Component {
    render() {

        return (
            <section className="areas-block section">
                <div className="_container">
                <div className="areas-block__wrapper">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 areas-block__item">
                            <div className="areas-block__img">
                            <img src={areaImage} alt="xxx"/>
                            </div>
                            <p>orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                        </div>
                        <div className="col-sm-6 col-md-4  areas-block__item">
                            <div className="areas-block__img">
                            <img src={areaImage} alt="xxx"/>
                            </div>
                            <p>orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                        </div>
                        <div className="col-sm-6 col-md-4  areas-block__item">
                            <div className="areas-block__img">
                            <img src={areaImage} alt="xxx"/>
                            </div>
                            <p>orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                        </div>
                        <div className="col-sm-6 col-md-4  areas-block__item">
                            <div className="areas-block__img">
                            <img src={areaImage} alt="xxx"/>
                            </div>
                            <p>orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                        </div>
                        <div className="col-sm-6 col-md-4  areas-block__item">
                            <div className="areas-block__img">
                            <img src={areaImage} alt="xxx"/>
                            </div>
                            <p>orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                        </div>
                        <div className="col-sm-6 col-md-4  areas-block__item">
                            <div className="areas-block__img">
                            <img src={areaImage} alt="xxx"/>
                            </div>
                            <p>orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                        </div>
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
}