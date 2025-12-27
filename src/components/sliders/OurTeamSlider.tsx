'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import { Button } from '@heroui/react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import ImageComponent from '../ui/ImageComponent';
import { TEAM_DATA } from '@/src/utils/data';


export default function OurTeamSlider() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="layout_container py-5 lg:py-20 relative">
            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 svg_color white mb-10">
                <Button onPress={() => swiperRef.current?.slidePrev()} className='bg-primary' isIconOnly radius='sm' aria-label="Previous slide" > <GoArrowLeft size={22} /> </Button>
                <Button onPress={() => swiperRef.current?.slideNext()} className='bg-primary' isIconOnly radius='sm' aria-label="Next slide" > <GoArrowRight size={22} /> </Button>
            </div>

            <Swiper
                modules={[Navigation]}
                loop={true}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={0}
                grabCursor
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                    setActiveIndex(swiper.realIndex);
                }}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                }}
                breakpoints={{
                    // 540: { slidesPerView: 2 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {TEAM_DATA && TEAM_DATA?.length > 0 && TEAM_DATA.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <SwiperSlide key={item.id}>
                            <div className="flex flex-col items-center">
                                {/* Image */}
                                <div
                                    className={`rounded-full overflow-hidden transition-all duration-500 ${isActive ? 'w-50 sm:w-60 h-50 sm:h-60 scale-100 border-2 border-secondary' : 'w-40 h-40 scale-90 opacity-70'}`}>
                                    <ImageComponent url={item.image} img_title={item.name} object_cover={true} />
                                </div>

                                {/* Info Card */}
                                {isActive && (
                                    <div className="relative mt-10 bg-primary text-white text-center px-10 py-8 rounded-2xl w-full lg:w-175 space-y-6">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rotate-45" />
                                        <div className='space-y-1'>
                                            <h3 className="text-4xl white font-bold uppercase">{item?.name}</h3>
                                            <p className="text-secondary text-2xl">{item?.role}</p>
                                        </div>
                                        <p>{item?.quote} </p>
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
