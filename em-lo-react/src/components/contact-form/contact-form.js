import React, { Component, useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [result, setResult] = useState(null);

    const sendEmail = event => {
        event.preventDefault();
        axios
            .post('/send', { ...state })
            .then(response => {
                setResult(response.data);
                setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            })
            .catch(() => {
                setResult({
                    success: false,
                    message: 'Something went wrong. Try again later'
                });
            });
    };

    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };

    return (
        <section className="contacts section">
            <div className="_container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="contacts__items">
                            <div className="contacts__item">
                                <div className="contacts__title">Contact info</div>
                                <a className="contacts__link" href="#">info@emergency-locksmith-24.co.uk</a>
                                <a className="contacts__link" href="#">020 8059 5259</a>
                            </div>
                            <div className="contacts__item">
                                <div className="contacts__title">Mailing address</div>
                                <div className="contacts__link" href="#">Emergency Locksmith 24</div>
                                <div className="contacts__link" href="#">179 Queens Dr, Liverpool L15 6XS<br/>United Kingdom</div>
                            </div>
                            <div className="contacts__item">
                                <div className="contacts__title">Company Reg. Number:</div>
                                <div className="contacts__link" href="#">11494148</div>
                            </div>
                            <div className="contacts__item">
                                <div className="contacts__title">VAT Number:</div>
                                <div className="contacts__link" href="#">305-2934-37</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="contacts__form contact-form">
                            {result && (
                                <div className={`${result.success ? 'success' : 'error'}`}>
                                    {result.message}
                                </div>
                            )}
                            <form onSubmit={sendEmail} encType="multipart/form-data" method="post" className="form" id="form">
                                <Form.Group controlId="name"  className="form__line">
                                    <Form.Label className="input-label">Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={state.name}
                                        placeholder="Enter your full name"
                                        onChange={onInputChange}
                                        className="input contact-form__input aInput form-input aInputs"
                                    />
                                </Form.Group>
                                <Form.Group controlId="email" className="form__line">
                                    <Form.Label className="input-label">Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="email"
                                        value={state.email}
                                        placeholder="Enter your email"
                                        onChange={onInputChange}
                                        className="input contact-form__input form-input aInput"
                                    />
                                </Form.Group>
                                <Form.Group controlId="subject" className="form__line">
                                    <Form.Label className="input-label">Subject</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="subject"
                                        value={state.subject}
                                        placeholder="Enter subject"
                                        onChange={onInputChange}
                                        className="input contact-form__input form-input aInput"
                                    />
                                </Form.Group>
                                <Form.Group controlId="subject" className="form__line">
                                    <Form.Label className="input-label">Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        value={state.message}
                                        rows="3"
                                        placeholder="Enter your message"
                                        onChange={onInputChange}
                                        className="aInput input contact-form__input"
                                    />
                                </Form.Group>
                                <Form.Group controlId="subject" className="form__line">
                                    <Button variant="primary" type="submit"  className="form__button contact-form__submit btn btn--primary">
                                        Submit
                                    </Button>
                                </Form.Group>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ContactForm;