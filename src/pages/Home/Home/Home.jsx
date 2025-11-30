import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import Works from '../Works/Works';
import Services from '../Services/Services';
import Process from '../Process/Process';

const reviewsPromise = fetch('/reviews.json').then(res => res.json())
const worksPromise = fetch('/works.json').then(res => res.json());
const servicesPromise = fetch('/services.json').then(res => res.json())
const processPromise = fetch('/process.json').then(res => res.json())

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12'>
            <Banner></Banner>
            <Works worksPromise={worksPromise}></Works>
            <Services servicesPromise={servicesPromise}></Services>
            <Brands></Brands>
            <Process processPromise={processPromise}></Process>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;