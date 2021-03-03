import React from "react";
import Footer from '../components/footer';
import Banner from '../components/banner';
import ContactBlock from '../components/contact-block';
import MetaTags from 'react-meta-tags';

const Blog = () => {

return ( 
    <>
    <MetaTags>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
        <title>Blog - 24/4 locksmith services in Liverpool</title>
        <meta id="meta-description" name="description" content="Blog. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259" />
        <meta property="og:url" content="https://emergency-locksmith-24.co.uk/blog/"/>
        <meta property="og:type" content="page"/>
        <meta property="og:title" content="Blog - 24/4 locksmith services in Liverpool"/>
        <meta property="og:description" content="Blog. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259"/>
    </MetaTags>
    <Banner title="Blog Emergency Locksmith 24" features1="24/7, 365 Days a Year"
                    features2="From £ 39" features3="At your door in 20 min" telefone="020 8059 5259" />
    <div className="container">
    <h2 className="block-news__heading block-title text--align-center">Our blog</h2>
        <article className="news-box">
        <div className="row">
            <div className="col-lg-4 news-box__img">					
                <img src="img/banner-img.jpg" className="" alt=""/>
            </div>
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-lg-11">
                        <p className="news-box__date">27th January 2021</p>
                        <h2 className="news-box__title"><a href="/">lorem ipsum lorem ipsum</a></h2>
                        <p className="news-box__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem eaque explicabo tenetur ex? Molestias sunt voluptate dolor quos iure consequatur alias, rerum, voluptatem minus deserunt sit ratione sed consectetur placeat.</p>
                        <a href="/" className="btn btn--primary">More...</a>                            </div>
                </div>
            </div>
        </div>
        </article>
        <article className="news-box">
            <div className="row">
                <div className="col-lg-4 news-box__img">					
                    <img src="img/banner-img.jpg" className="" alt=""/>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-11">
                            <p className="news-box__date">27th January 2021</p>
                            <h2 className="news-box__title"><a href="/">lorem ipsum lorem ipsum</a></h2>
                            <p className="news-box__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem eaque explicabo tenetur ex? Molestias sunt voluptate dolor quos iure consequatur alias, rerum, voluptatem minus deserunt sit ratione sed consectetur placeat.</p>
                            <a href="/" className="btn btn--primary">More...</a>                            </div>
                    </div>
                </div>
            </div>
            </article>
            <article className="news-box">
                <div className="row">
                    <div className="col-lg-4 news-box__img">					
                        <img src="img/banner-img.jpg" className="" alt=""/>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-11">
                                <p className="news-box__date">27th January 2021</p>
                                <h2 className="news-box__title"><a href="/">lorem ipsum lorem ipsum</a></h2>
                                <p className="news-box__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem eaque explicabo tenetur ex? Molestias sunt voluptate dolor quos iure consequatur alias, rerum, voluptatem minus deserunt sit ratione sed consectetur placeat.</p>
                                <a href="/" className="btn btn--primary">More...</a>                            
                                </div>
                        </div>
                    </div>
                </div>
                </article>
        </div>
        <ContactBlock />
        <Footer />
        </>    
    );
};
export default Blog;