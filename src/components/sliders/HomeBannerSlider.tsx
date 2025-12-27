import React, { useState, useEffect, useCallback } from 'react';
import ImageComponent from '../ui/ImageComponent';

export default function HomeBannerSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        '/images/banner/img1.svg',
        '/images/banner/img2.svg',
        '/images/banner/img3.svg',
    ]

    const totalSlides = slides.length;

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const getDiff = (index: number) => (index - currentIndex + totalSlides) % totalSlides;

    const getSlideStyle = (diff: number) => {
        if (diff === 0) {
            // Center position
            return "z-30 scale-70 sm:scale-90 lg:scale-80 xl:scale-90 translate-x-0 blur-none pointer-events-auto";
        } else if (diff === 1) {
            // Right position
            return "z-10 scale-40 sm:scale-50 lg:scale-40 xl:scale-50 translate-x-[60%] sm:translate-x-[80%] lg:translate-x-[70%] xl:translate-x-[80%] blur-xs pointer-events-none rotate-y-[-10deg]";
        } else if (diff === totalSlides - 1) {
            // Left position
            return "z-10 scale-40 sm:scale-50 lg:scale-40 xl:scale-50 -translate-x-[60%] sm:-translate-x-[80%] lg:-translate-x-[70%] xl:-translate-x-[80%] blur-xs pointer-events-none rotate-y-[10deg]";
        } else {
            // Hidden or far away
            return "opacity-0 scale-50 z-0 pointer-events-none";
        }
    };

    return (
        <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
            <div className="relative w-full h-138 flex items-end justify-center">
                {slides && slides?.length > 0 && slides?.map((item, index) => {
                    const diff = getDiff(index);
                    const isActive = diff === 0;
                    return (
                        <div
                            key={index}
                            className={`absolute transition-all duration-1000  ${getSlideStyle(diff)}`}
                        >
                            <div className="relative">
                                <ImageComponent url={item} img_title={`slider image${index + 1}`} object_cover={false} />
                                {/* {isActive &&
                                    <div className="absolute bottom-0 -left-6 pointer-events-none">
                                        <div className="scan-animation">
                                            <div className="w-87.5 h-20">
                                                <ImageComponent url={`/images/shapes/scan.svg`} img_title={`slide scan`} object_cover={true} />
                                            </div>
                                        </div>
                                    </div>
                                } */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};