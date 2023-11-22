import {NextPage} from "next";
import Container from "@/components/ui/container";
import getProfile from "@/actions/getProfile";
import Button from "@/components/ui/button";
import Link from "next/link";
import {FaEdit} from "react-icons/fa";
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import TotalPrice from "@/components/totalPrice";
import {redirect} from "next/navigation";
interface CheckoutPageProps {
    params: {
        ProfileId: string
    }
}

const  CheckoutPage: NextPage<CheckoutPageProps> = async ({params}) => {
    const profileData = await getProfile(params.ProfileId)

    const doCheckout = async () => {
        'use server'
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)
        const userId = await supabase.auth.getUser()
        const { data, error } = await supabase
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
                console.log(error)
            }
            redirect(`/`)
    }
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const profileEditId = await supabase.auth.getUser()
    return (
        <Container className={`py-10`}>
            <h1 className={`text-3xl font-bold w-[90vw] max-w-full`}>Заказ</h1>
            <form action={doCheckout}>
                <div className={`flex flex-col gap-2 text-xl `}>
                    <div className={`flex flex-col gap-2 text-xl py-10`}>
                        <div className={`font-bold text-xl`}>Получатель</div>
                        <div><span>Имя: </span>{profileData.first_name}</div>
                        <div><span>Фамилия: </span>{profileData.last_name}</div>
                        <div><span>Отчество: </span>{profileData.patronymic}</div>
                        <div><span>Адрес: </span>{profileData.address}</div>
                        <Link href={`/profileEdit/${profileEditId.data.user?.id}`} className={`w-fit`}>
                            <Button className={`flex justify-center items-center gap-2 text-sm`}>
                                Редактировать
                                <FaEdit className={`text-xl text-white hover:cursor-pointer`}/>
                            </Button>
                        </Link>
                        <div className={`font-bold text-xl mt-10`}>Заказ:</div>
                        <TotalPrice/>
                    </div>
                    <Button className={`text-sm `}>Заказать</Button>
                </div>
            </form>
        </Container>
    )
}
export default CheckoutPage
