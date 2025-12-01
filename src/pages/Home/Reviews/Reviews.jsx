import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import customersSupport from '../../../assets/customer-top.png'

const Reviews = ({ reviewsPromise }) => {

    const reviews = use(reviewsPromise);
    // console.log(reviews);

    return (
        <div className='my-[100px]'>
            <div className='text-center mb-10'>
                <img className='mx-auto' src={customersSupport} alt="" />
                <h3 className='text-3xl font-extrabold text-secondary text-center mt-8 mb-6'>What our customers are sayings</h3>
                <p className='text-[#606060] lg:w-2/3 mx-auto'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review.id}>
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;