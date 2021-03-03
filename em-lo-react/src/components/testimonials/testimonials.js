import testimonial1 from '../../../src/img/testimonial-1.png';
import testimonial2 from '../../../src/img/testimonial-2.png';
import testimonial3 from '../../../src/img/testimonial-3.png';

import React from 'react';
import Swiper from 'react-id-swiper';



const Testimonials = () => {

   const dataTestimonials = {
    names: [
        'James',
        'Regina',
        'Oliver'
    ],
    images: [
      testimonial1,
      testimonial2,
      testimonial3
    ],
    textForTestimonials: [
        "They responded really fast to my call. Locksmith arrived at my place in 20 minutes after I had a conversation with the dispatcher. The door was opened quickly, and master left no mess behind for me to clean up for which I’m very grateful.",
        "Called them late Saturday night, and I must say the service was excellent. Friendly staff, affordable prices and professional. Even though it was 2 a.m. on the clock, the locksmith seemed to be full of energy and ready to help me open my front door. Many thanks!",
        "I was so frustrated after arriving at my place from work and realizing that the keys are lost. Thanks to this locksmith company's quick response and professionalism, my frustration didn’t grow into despair! Less than an hour passed from the moment I called them to a point where I entered my house. Good work."
    ]
  }

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
                    <div className="testimonial__img">
                      <img src={dataTestimonials.images[0]} />
                    </div>
                    <div className="testimonial__author">{dataTestimonials.names[0]}</div>
                  </div>
                  <div className="testimonial__body">
                    <p>{dataTestimonials.textForTestimonials[0]}</p>
                  </div>
                </div>
              </div>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__img">
                      <img src={dataTestimonials.images[1]} />
                    </div>
                    <div className="testimonial__author">{dataTestimonials.names[1]}</div>
                  </div>
                  <div className="testimonial__body">
                    <p>{dataTestimonials.textForTestimonials[1]}</p>
                  </div>
                </div>
              </div>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__img">
                      <img src={dataTestimonials.images[2]} />
                    </div>
                    <div className="testimonial__author">{dataTestimonials.names[2]}</div>
                  </div>
                  <div className="testimonial__body">
                    <p>{dataTestimonials.textForTestimonials[2]}</p>
                  </div>
                </div>
              </div>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__img">
                      <img src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" />
                    </div>
                    <div className="testimonial__author">{dataTestimonials.names[2]}</div>
                  </div>
                  <div className="testimonial__body">
                    <p>Excellent service from phone call to man coming to open the door, couldn't have been more helpful to resolve my problem . Recommended </p>
                  </div>
                </div>
              </div>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__img">
                      <img src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" />
                    </div>
                    <div className="testimonial__author">{dataTestimonials.names[1]}</div>
                  </div>
                  <div className="testimonial__body">
                    <p>Excellent service from phone call to man coming to open the door, couldn't have been more helpful to resolve my problem . Recommended </p>
                  </div>
                </div>
              </div>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__img">
                      <img src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" />
                    </div>
                    <div className="testimonial__author">{dataTestimonials.names[0]}</div>
                  </div>
                  <div className="testimonial__body">
                    <p>Excellent service from phone call to man coming to open the door, couldn't have been more helpful to resolve my problem . Recommended </p>
                  </div>
                </div>
              </div>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__img">
                      <img src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" />
                    </div>
                    <div className="testimonial__author">{dataTestimonials.names[0]}</div>
                  </div>
                  <div className="testimonial__body">
                    <p>Excellent service from phone call to man coming to open the door, couldn't have been more helpful to resolve my problem . Recommended </p>
                  </div>
                </div>
              </div>
              <div className="testimonials__item">
                <div className="testimonial">
                  <div className="testimonial__header">
                    <div className="testimonial__img">
                      <img src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg" />
                    </div>
                    <div className="testimonial__author">{dataTestimonials.names[0]}</div>
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
