import React from "react";
import Footer from '../components/footer';
import Banner from '../components/banner';
import ContactBlock from '../components/contact-block';
import MetaTags from 'react-meta-tags';

const Price = () => {
    return (
        <>
        <MetaTags>
            <title>Price - 24/4 locksmith services in Liverpool</title>
            <meta id="meta-description" name="description" content="Price. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259" />
        </MetaTags>
        <Banner title="Emergency Locksmith 24" features1="24/7, 365 Days a Year" 
        features2="From £ 39" features3="At your door in 20 min" telefone="020 8059 5259">
        </Banner>
        <section className="price-block section  ">
            <div className="container block-price">
                <div className="block-price__list">
                    <h2 className="block-price__heading block-title text--align-center">Price list</h2>
                    <table className="">
                        <thead>
                            <tr>
                                <th>lorem ipsum</th>
                                <th>lorem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                <td>£80</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                <td>£7</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                <td>£113</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                <td>£88</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                <td>£67</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                <td>£88</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                <td>£88</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                <td>£87</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                <td>£68</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                <td>£67</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                <td>£77</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <ContactBlock />
        <Footer />
    </>
    );
}

export default Price;
