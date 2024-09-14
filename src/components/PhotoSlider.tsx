// src/components/PhotoSlider.tsx
import React from 'react';
import Slider from 'react-slick';

interface PhotoSliderProps {
    photos: { src: string; title: string; text: string }[];
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ photos }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="relative">
            <h2 className="text-center text-3xl font-bold mb-4">CURRENT TEAM</h2>
            <Slider {...settings}>
                {photos.map((photo, index) => (
                    <div key={index} className="p-4">
                        <img src={photo.src} alt={photo.title} className="w-full h-auto" />
                        <h3 className="text-xl mt-2">{photo.title}</h3>
                        <p>{photo.text}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PhotoSlider;
