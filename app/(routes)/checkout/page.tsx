'use client'
import {NextPage} from "next";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Link from "next/link";
import {FaEdit} from "react-icons/fa";
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import TotalPrice from "@/components/totalPrice";
import {redirect, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useSupabaseClient, useUser} from "@supabase/auth-helpers-react";
import {toast} from "react-hot-toast";
import { motion } from "framer-motion";
import Summary from "@/app/(routes)/cart/components/summary";
interface CheckoutPageProps {
    params: {
        ProfileId: string
    }
}

const  CheckoutPage: NextPage<CheckoutPageProps> = ({params}) => {
    const router = useRouter()
    const supabaseClient = useSupabaseClient();
    const [profileData,setProfileData] = useState({
        first_name: '',
        last_name: '',
        patronymic: '',
        address: '',
    })
    const [isAuth, setIsAuth] = useState(false)
    const user  = useUser()
    useEffect( () => {
        supabaseClient
            .from('profiles')
            .select('*')
            .then((res)=>{
                setProfileData(res.data![0])
            })
        if (user){
            setIsAuth(true)
        }
    }, [user]);
    const toProfile = async (e:any) => {
        e.preventDefault()
        const profileId = await supabaseClient.auth.getUser()
        return router.push(`/profile/${profileId.data.user?.id}`)
    }
    const doCheckout = async () => {
        const userId = await supabaseClient.auth.getUser()
        const { data, error } = await supabaseClient
            .from('orders')
            .insert([{
                userID: userId.data.user?.id,
                status: 'В обработке',
                product_list: ['123','12321'],
                total_price: 150,
                paid: false
            }])
            .select()
            if (error){
                toast.error('Ошибка')
            } else {
                toast.success('Заказ произведен')
                redirect(`/`)
            }
    }
    return (
        <Container className={`py-10`}>
            <h1 className={`text-3xl font-bold w-[90vw] max-w-full`}>Заказ</h1>
            {isAuth ?
                <form action={doCheckout}>
                    <div className={`flex flex-col gap-2 text-xl `}>
                        <motion.div className={`flex flex-col gap-2 text-xl py-10`}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0, }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        duration: 2
                                    }}>

                            <div className={`font-bold text-xl mb-2`}>Получатель</div>
                            <div><span>Имя: </span>{profileData.first_name}</div>
                            <div><span>Фамилия: </span>{profileData.last_name}</div>
                            <div><span>Отчество: </span>{profileData.patronymic}</div>
                            <div><span>Адрес: </span>{profileData.address}</div>

                            <Button onClick={toProfile} className={`flex justify-center items-center gap-2 text-sm w-fit mt-3`}>
                                Редактировать
                                <FaEdit className={`text-xl text-white hover:cursor-pointer`}/>
                            </Button>
                        </motion.div>
                        <motion.div
                            className={`flex flex-col gap-2`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0, }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                duration: 2
                            }}>
                            <div className={`font-bold text-xl mt-10`}>Заказ:</div>
                            <TotalPrice/>
                            <Button className={`text-sm w-full`}>Заказать</Button>
                        </motion.div>
                    </div>
                </form>
                :
                <div className={`flex flex-col gap-4 py-6`}>
                    <div className={`w-full text-xl`}>Для создания заказа вы должны быть авторизованы</div>
                    <Button className={`w-fit`}><Link href={`/login`}>Страница авторизации</Link></Button>
                </div>
            }

        </Container>
    )
}
export default CheckoutPage
