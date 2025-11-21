import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {

    const reviews = use(reviewsPromise);
    console.log(reviews);

    return (
        <div className='my-24'>
            <div className='text-center mb-10'>
                <h3 className='text-3xl font-bold text-center my-8'>Review</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius accusantium saepe sint esse dolore enim nam, quaerat id quis, voluptas, placeat illo quidem! Culpa soluta dolore voluptatem velit aperiam, eius odio fugit nam, voluptatibus cupiditate vero mollitia. Pariatur delectus cumque culpa illum voluptatibus, vero ipsam numquam suscipit sapiente, nesciunt modi.</p>
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