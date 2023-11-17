'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/effect-cards';

import Image from "next/image";
import case1 from "@/public/CaseImg1.jpg"

// import required modules
import { EffectCards } from 'swiper/modules';
import Container from "@/components/ui/container";

const slides = [
    {
        text: 'slide1',
        img: 'string'
    },
    {
        text: 'slide2',
        img: 'string'
    },
    {
        text: 'slide3',
        img: 'string'
    },
    {
        text: 'slide4',
        img: 'string'
    },
]
const HomePageGallery = () => {

    return (
        <Container className="py-10 flex flex-col md:flex-row gap-6 items-center justify-center text-center md:text-left">
            <motion.div
                className={`flex flex-col gap-3 justify-center md:max-w-[30vw]`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    duration: 2
                }}>
                <h2 className={`text-3xl`}>Наши проекты</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae consectetur consequuntur
                debitis, deserunt dolorem doloremque ea eligendi inventore ipsum laboriosam molestiae
                mollitia nihil officia optio praesentium quam, vitae voluptas.
            </motion.div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="max-w-[300px] h-[300px] lg:max-w-[400px] lg:h-[400px]"
            >
                    {slides.map((item,index)=>(
                        <SwiperSlide key={index} className={`!flex flex-col items-center justify-center rounded-xl bg-neutral-100 border-b`}>
                            <Image src={case1} alt="PC-case-img" className={``}/>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </Container>
    );
}
export default HomePageGallery;
