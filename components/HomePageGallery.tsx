'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import Image from "next/image";
import case1_1 from '@/public/case1_1.jpg'
import case1_2 from '@/public/case1_2.jpg'
import case1_3 from '@/public/case1_3.jpg'
import case1_4 from '@/public/case1_4.jpg'

// import required modules
import {EffectCards, Keyboard, Navigation, Pagination} from 'swiper/modules';
import Container from "@/components/ui/container";

const slidesInner = [
    {
        images: [case1_1, case1_2, case1_3, case1_4],
        text: {
            MB: 'ASUS ROG Strix B760-i Gaming',
            CPU: 'INTEL CORE i5-13500',
            GPU: 'INNO3D RTX 4070ti 12Gb',
            PSU: 'Corsair SF600 pl',
            RAM: 'G.SKILL DDR5-6000 FlareX5 32Gb',
            Cooler:' NOCTUA NH-L9i-17xx',
            NVME:' M.2 Kingston NV2 1Tb',
        }
    },
    {
        images: [case1_1, case1_2, case1_3, case1_4],
        text: {
            MB: 'ASUS ROG Strix B760-i Gaming',
            CPU: 'INTEL CORE i5-13500',
            GPU: 'INNO3D RTX 4070ti 12Gb',
            PSU: 'Corsair SF600 pl',
            RAM: 'G.SKILL DDR5-6000 FlareX5 32Gb',
            Cooler:' NOCTUA NH-L9i-17xx',
            NVME:' M.2 Kingston NV2 1Tb',
        }
    },
]
const HomePageGallery = () => {

    return (
        <Container className="py-10 space-y-4">
            <h2 className={`text-3xl mx-auto text-center mt-5 font-bold`}>Сборки наших клиентов</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Pagination]}
                className="mySwiper"
            >
                {slidesInner.map((item,index)=>(
                    <SwiperSlide key={index}>
                        <div className={`flex flex-col xl:flex-row gap-6 items-center justify-center text-center xl:text-left py-10`}>
                            <motion.div
                                className={`flex flex-col gap-3 justify-center w-full xl:ml-6 xl:max-w-[25vw] font-medium`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0, }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    duration: 2
                                }}>
                                <div>Материнская плата:
                                    {" " + item.text.MB}
                                </div>
                                <div>Процессор:
                                    {" " + item.text.CPU}
                                </div>
                                <div>Видеокарта:
                                    {" " + item.text.GPU}
                                </div>
                                <div>Блок питания:
                                    {" " + item.text.PSU}
                                </div>
                                <div>Оперативная память:
                                    {" " + item.text.RAM}
                                </div>
                                <div>Охлаждение процессора:
                                    {" " + item.text.Cooler}
                                </div>
                                <div>Хранение данных:
                                    {" " + item.text.NVME}
                                </div>
                            </motion.div>
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="max-w-[260px] h-[260px] lg:max-w-[350px] lg:h-[350px] !mx-0"
                            >
                                {item.images.map((item,index)=>(
                                    <SwiperSlide key={index} className={`!flex flex-col items-center justify-center rounded-xl bg-white border-b`}>
                                        <Image src={item} alt="PC-case-img" className={``}/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}
export default HomePageGallery;
