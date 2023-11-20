"use client"
import {NextPage} from "next";
import Container from "@/components/ui/container";
import {motion} from "framer-motion";
import Image from "next/image";
import About from "@/public/aboutBg.png";

const  AboutPage:NextPage = () => {
    return (
        <div className={`py-10`}>
            <Container>
                <h1 className={`text-3xl font-bold w-[100vw] max-w-full`}>О нас</h1>
            </Container>
            <div className={`relative w-full 2xl:overflow-y-hidden 2xl:h-[550px] md:flex `}>
                <div className={` z-10
                  relative
                  mx-auto             
                  max-w-screen-2xl
                  xl:max-w-7xl
                  lg:max-w-6xl
                  w-full
                  md:max-w-5xl
                  before:w-[100vw] before:h-full before:absolute before:right-[85%] before:bg-gray-50 
                  `}>
                    <motion.svg className={`absolute top-110px left-24 w-[640px] z-20] hidden 2xl:block`} x="0px" y="0px" viewBox="0 0 649 578">
                        <path fill='#fafafa'
                              d="M-225.5,154.7l358.45,456.96c7.71,9.83,21.92,11.54,31.75,3.84l456.96-358.45c9.83-7.71,11.54-21.92,3.84-31.75L267.05-231.66c-7.71-9.83-21.92-11.54-31.75-3.84l-456.96,358.45C-231.49,130.66-233.2,144.87-225.5,154.7z"></path>
                        <motion.path
                            initial={{pathLength: 0}}
                            animate={{pathLength: 1}}
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                            }}
                            fill='none'
                            stroke='#9E00FF'
                            d='M 416 -21 l 202.27 292.91 c 5.42 7.85 3.63 18.59 -4.05 24.25 L 198 603'
                            strokeWidth='3'
                            strokeMiterlimit='10'
                            strokeDashoffset='0'
                            strokeDasharray='900.258'/>
                    </motion.svg>
                    <div className={`relative 2xl:h-[550px] bg-gray-50 px-6 2xl:bg-transparent 2xl:px-0 z-20 flex flex-col justify-center py-10 gap-2 text-md md:max-w-[450px]`}>
                        <motion.p
                            className={``}
                            initial={{opacity: 0, x: -30}}
                            whileInView={{opacity: 1, x: 0,}}
                            viewport={{once: true}}
                            transition={{
                                type: "spring",
                                duration: 1
                            }}
                        >
                            CATBOX была основана в 2022 году с тех пор мы разрабатываем наши корпуса для персональных
                            копмпьютеров. За это время мы разработали
                            множество моделей и отправили более 600 заказов.
                        </motion.p>
                        <motion.p
                            className={``}
                            initial={{opacity: 0, x: -30}}
                            whileInView={{opacity: 1, x: 0,}}
                            viewport={{once: true}}
                            transition={{
                                type: "spring",
                                duration: 1.5
                            }}
                        >
                            Наша миссия - сделать вашу жизнь удобнее. Мы верим, что современный компьютер может быть
                            компактным и мощным.
                        </motion.p>
                        <motion.p
                            className={``}
                            initial={{opacity: 0, x: -30}}
                            whileInView={{opacity: 1, x: 0,}}
                            viewport={{once: true}}
                            transition={{
                                type: "spring",
                                duration: 2
                            }}
                        >
                            Как мы создаем наши уникальные модели корпусов и подставок? Сначала мы проектируем модель в
                            программе SolidWorks,
                            где вы можете предварительно просмотреть 3D-модель будущего корпуса. Затем заготовки
                            вырезаются из листового металла на лазерном оборудовании.
                            Из плоских заготовок на небольшом ручном гибочном станке отдельные детали корпуса становятся
                            объемными.
                            Теперь все детали можно покрасить порошковой краской в нужные цвета.
                            Берем окрашенные детали и собираем из них готовые модели. Тщательно упакован и отправлен вам
                            практически в любую точку мира!
                        </motion.p>
                    </div>
                </div>
                <Image src={About}
                       alt={'it must be a photo of case but something go wrong'}
                       width={1500}
                       height={500}
                       className={`mx-auto h-[100%] right-0 md:absolute object-cover`}/>
            </div>
        </div>
    )
}
export default AboutPage