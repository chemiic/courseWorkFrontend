"use client";

import {type FC} from 'react';
import {Billboard as BillboardType} from "@/types/types";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface BillboardProps {
    data: BillboardType[];
}

const BillboardSlider: FC<BillboardProps> = ({data}) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-full "
            >
                {data.map(billboard => (
                    <SwiperSlide key={billboard.id}>
                        <div
                            className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
                            style={{backgroundImage: `url(${billboard.imageUrl})`}}
                        >
                            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                                <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                                    {billboard.label}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BillboardSlider;
