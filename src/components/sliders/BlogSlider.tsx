'use client'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { BLOG_POSTS } from '@/src/utils/data';
import { Button } from '@heroui/react';
import BlogSliderCard from '../common/BlogSliderCard';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

export default function BlogSlider() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <>
            <div className='layout_container'>
                <Swiper
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    grabCursor={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {BLOG_POSTS.map((item) => (
                        <SwiperSlide key={item?.id} className="h-auto!">
                            <BlogSliderCard data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
    
                {/* Navigation Controls */}
                <div className="flex justify-center items-center gap-4 svg_color white">
                    <Button onPress={() => swiperRef.current?.slidePrev()} isDisabled={isBeginning} className='bg-primary' isIconOnly radius='sm' aria-label="Previous slide" > <GoArrowLeft size={22} /> </Button>
                    <Button onPress={() => swiperRef.current?.slideNext()} isDisabled={isEnd} className='bg-primary' isIconOnly radius='sm' aria-label="Next slide" > <GoArrowRight size={22} /> </Button>
                </div>
            </div>
        </>
    );
};