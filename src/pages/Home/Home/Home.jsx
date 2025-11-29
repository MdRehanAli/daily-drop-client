import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import Works from '../Works/Works';

const reviewsPromise = fetch('/reviews.json').then(res => res.json())
const worksPromise = fetch('/works.json').then(res => res.json());

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <Works worksPromise={worksPromise}></Works>
            <Brands></Brands>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;