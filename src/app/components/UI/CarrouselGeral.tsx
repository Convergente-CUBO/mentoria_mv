"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface CarrosselProps {
    items: React.ReactNode[]; // Usamos React.ReactNode para permitir que qualquer componente seja passado (inclusive o NoticiaCard)
}

const Carrossel: React.FC<CarrosselProps> = ({ items }) => {
    const swiperRef = useRef<any>(null);

    return (
        <div className="relative w-full max-w-[90vw] md:max-w-[1200px] lg:max-w-[1400px] xl:max-w-[1600px] mx-auto">
            <button
                className="absolute -left-9 top-1/2 transform -translate-y-1/3 bg-white shadow-md p-4 rounded-full hover:bg-gray-200 transition z-10"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <ChevronLeft className="w-8 h-8 text-black" />
            </button>

            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={3}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>{item}</SwiperSlide>
                ))}
            </Swiper>

            <button
                className="absolute -right-9 top-1/2 transform -translate-y-1/3 bg-white shadow-md p-4 rounded-full hover:bg-gray-200 transition z-10"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <ChevronRight className="w-8 h-8 text-black" />
            </button>
           
        </div>
    );
};

export default Carrossel;
