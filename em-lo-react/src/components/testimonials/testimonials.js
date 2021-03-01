import React from 'react';
import Swiper from 'react-id-swiper';

const Testimonials = () => {

  const params = {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }

    return (
        <section className="testimonials section">
          <div className="_container">
          <h2 className="block-title text--align-center">Testimonials</h2>
          <div className="testimonials__items testimonials-slider">
            <Swiper {...params}>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__author">Hollie Newton</div>
                    <div className="testimonial__date">8.14.2020</div>
                    <div className="testimonial__rating rating"></div>
                  </div>
                  <div className="testimonial__body">
                    <p>Excellent service from phone call to man coming to open the door, couldn't have been more helpful to resolve my problem . Recommended </p>
                  </div>
                </div>
              </div>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__author">Hollie Newton</div>
                    <div className="testimonial__date">8.14.2020</div>
                    <div className="testimonial__rating rating"></div>
                  </div>
                  <div className="testimonial__body">
                    <p>Excellent service from phone call to man coming to open the door, couldn't have been more helpful to resolve my problem . Recommended </p>
                  </div>
                </div>
              </div>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__author">Hollie Newton</div>
                    <div className="testimonial__date">8.14.2020</div>
                    <div className="testimonial__rating rating"></div>
                  </div>
                  <div className="testimonial__body">
                    <p>Excellent service from phone call to man coming to open the door, couldn't have been more helpful to resolve my problem . Recommended </p>
                  </div>
                </div>
              </div>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__author">Hollie Newton</div>
                    <div className="testimonial__date">8.14.2020</div>
                    <div className="testimonial__rating rating"></div>
                  </div>
                  <div className="testimonial__body">
                    <p>Excellent service from phone call to man coming to open the door, couldn't have been more helpful to resolve my problem . Recommended </p>
                  </div>
                </div>
              </div>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__author">Hollie Newton</div>
                    <div className="testimonial__date">8.14.2020</div>
                    <div className="testimonial__rating rating"></div>
                  </div>
                  <div className="testimonial__body">
                    <p>Excellent service from phone call to man coming to open the door, couldn't have been more helpful to resolve my problem . Recommended </p>
                  </div>
                </div>
              </div>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__author">Hollie Newton</div>
                    <div className="testimonial__date">8.14.2020</div>
                    <div className="testimonial__rating rating"></div>
                  </div>
                  <div className="testimonial__body">
                    <p>Excellent service from phone call to man coming to open the door, couldn't have been more helpful to resolve my problem . Recommended </p>
                  </div>
                </div>
              </div>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__author">Hollie Newton</div>
                    <div className="testimonial__date">8.14.2020</div>
                    <div className="testimonial__rating rating"></div>
                  </div>
                  <div className="testimonial__body">
                    <p>Excellent service from phone call to man coming to open the door, couldn't have been more helpful to resolve my problem . Recommended </p>
                  </div>
                </div>
              </div>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__author">Hollie Newton</div>
                    <div className="testimonial__date">8.14.2020</div>
                    <div className="testimonial__rating rating"></div>
                  </div>
                  <div className="testimonial__body">
                    <p>Excellent service from phondasdfasdfdasfe call to man coming to open the door, couldn't have been more helpful to resolve my problem . Recommended </p>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    );
}
export default Testimonials;
