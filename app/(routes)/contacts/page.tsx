'use client'
import {NextPage} from "next";
import Container from "@/components/ui/container";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { motion } from "framer-motion";

const  ContactsPage:NextPage = () => {
    return (
         <Container>
             <h1
                 className={`text-3xl  font-bold`}
             >
                 Контакты
             </h1>
             <div className={`w-[100vw] max-w-full min-h-[500px] flex flex-col  justify-center gap-2 text-xl`}>
                 <motion.div
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0, }}
                     viewport={{ once: true }}
                     transition={{
                         type: "spring",
                         duration: 2
                     }}
                 >
                     <Image src={logo} alt="CATBOX" className={`max-w-[150px] sm:max-w-[250px]`}/>
                 </motion.div>
                 <motion.p
                     className={`font-bold`}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0, }}
                     viewport={{ once: true }}
                     transition={{
                         type: "spring",
                         duration: 2
                     }}
                 >Телефон: <a  href="tel: 88005553535" className={`cursor-pointer font-normal`}>+7 (800) 555-35-35</a></motion.p>
                 <motion.p
                     className={`font-bold`}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0, }}
                     viewport={{ once: true }}
                     transition={{
                         type: "spring",
                         duration: 2
                     }}
                 >E-Mail: <a  href="mailto: catBox@gmail.com" className={`cursor-pointer font-normal`}>catBox@gmail.com</a></motion.p>
             </div>
        </Container>
    )
}
export default ContactsPage