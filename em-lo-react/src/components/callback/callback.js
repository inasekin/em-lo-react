import React from 'react';

const Callback = () => {
    return (
        <section className="callback-block section section--orange-bg">
            <div className="_container">
                <div className="callback-block__wrapper">
                    <div className="callback-block__text">Call us: 020 8059 5259 or</div>
                    <div className="callback-block__form-wrapper">
                        <form action="">
                            <div className="callback-block__form"> <input className="callback-block__input input"
                                    type="text" name="callback-name" id="callback-name" placeholder="Your name"/>
                                <input className="callback-block__input input" type="tel" name="callback-phone"
                                    id="callback-phone" placeholder="Your phone"/> <input type="submit" value="Send"
                                    className="callback-block__submit btn btn--transparent"/> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Callback;