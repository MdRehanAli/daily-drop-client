import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {

    const reviews = use(reviewsPromise);
    console.log(reviews);

    return (
        <div className='my-24'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold text-center my-8'>Review</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius accusantium saepe sint esse dolore enim nam, quaerat id quis, voluptas, placeat illo quidem! Culpa soluta dolore voluptatem velit aperiam, eius odio fugit nam, voluptatibus cupiditate vero mollitia. Pariatur delectus cumque culpa illum voluptatibus, vero ipsam numquam suscipit sapiente, nesciunt modi.</p>
            </div>
            <>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide key={review.id}>
                            <ReviewCard review={review}></ReviewCard>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </div>
    );
};

export default Reviews;