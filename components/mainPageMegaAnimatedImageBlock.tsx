'use client'
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import Image from "next/image";
import aboutUs from "@/public/home-about.png";
import aboutUs1Left from "@/public/home-about-1-left.png";
import aboutUs2Left from "@/public/home-about-2-left.png";
import aboutUs1Right from "@/public/home-about-1-right.png";
import {useRef} from "react";
import Button from "@/components/ui/button";
import Link from "next/link";

const mainPageMegaAnimatedImageBlock = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const imageValue = useTransform(scrollYProgress, [0, 1], [-30, 20])
    const aboutFrontAnim = useSpring(imageValue, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return(
        <section className={`flex items-center justify-between  py-10`}
                 ref={containerRef} >
            <div className={`md:max-w-[32vw] flex-col flex items-center justify-center md:items-start`}>
                <h2 className={`text-3xl font-bold`}>О нас<span className={`mx-auto md:mx-0 block w-10 bg-[--lightPurple] h-1 my-3`}></span></h2>
                <p className={`font-semibold text-neutral-600 mb-5 text-center md:text-left`}>
                    Мы производитель компактных корпусов для мини-ПК.
                </p>
                <p className={`text-neutral-500 text-center md:text-left`}>
                    <span>
                        Мы разрабатываем и производим стильные и прочные металлические корпуса. Наши компьютеры не занимают много места, и их легко можно взять с собой.
                        Наши продукты предназначены не только для ценителей малого форм-фактора (SFF), но и для всех, кто хочет иметь компактный и мощный компьютер.
                    </span>
                </p>
                <motion.div className={`flex items-center mt-4`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0, }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                duration: 2
                            }}>
                    <Link href={"/about"}>
                        <Button>Подробнее</Button>
                    </Link>
                </motion.div>
            </div>
            <div className={`hidden md:block max-w-[470px] flex-grow relative`}>
                <motion.div
                    className={`relative mt-2`}
                    style={{ top: aboutFrontAnim }}
                >
                    <Image src={aboutUs} alt={`авто`} width={320} height={320} className={`w-[440px] h-auto`}/>
                </motion.div>
                <Image src={aboutUs1Left} alt={``} width={110} height={110} className={`absolute top-0 left-5`}/>
                <Image src={aboutUs2Left} alt={``} width={70} height={70} className={`absolute bottom-10 left-9`}/>
                <Image src={aboutUs1Right} alt={``} width={95} height={95} className={`absolute right-0 top-[13%]`}/>
            </div>
        </section>
    )
}
export default mainPageMegaAnimatedImageBlock