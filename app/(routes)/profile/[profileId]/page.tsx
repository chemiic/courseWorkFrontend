import {NextPage} from "next";
import Container from "@/components/ui/container";
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Button from "@/components/ui/button";
import {FaEdit, FaUser, FaUserAltSlash} from "react-icons/fa";
import getProfile from "@/actions/getProfile";
import updateProfileInfo from "@/actions/updateProfileInfo";
import {Input} from "@material-tailwind/react";
import Link from "next/link";
interface ProfileIdProps {
    params: {
        ProfileId: string
    }
}

const ProfileIdPage: NextPage<ProfileIdProps> = async ({params}) => {
    const profileData = await getProfile(params.ProfileId)
    const signOut = async () => {
        'use server'

        const cookieStore = cookies()
        const supabase = createClient(cookieStore)
        await supabase.auth.signOut()
        return redirect('/')
    }
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const profileEditId = await supabase.auth.getUser()

    return (
        <Container className={`items-stretch justify-between`}>
            <h1 className={`text-3xl mt-6 font-bold`}>Профиль</h1>
            <div className={` py-10 w-[90vw] max-w-full`}>
                <div className={`flex gap-10 my-6 relative flex-col sm:flex-row`}>
                    <div className={`rounded-full bg-gray-200 w-[220px] h-[220px] flex items-center justify-center `}>
                        <FaUser className={`text-[140px]`}/>
                    </div>
                    <div>
                        <div className={`flex flex-col gap-2 text-xl`}>
                            <div><span>Имя: </span>{profileData.first_name}</div>
                            <div><span>Фамилия: </span>{profileData.last_name}</div>
                            <div><span>Отчество: </span>{profileData.patronymic}</div>
                            <div><span>Адрес: </span>{profileData.address}</div>
                        </div>
                        <Link href={`/profileEdit/${profileEditId.data.user?.id}`} className={`absolute right-0 top-0`}>
                            <FaEdit className={`text-2xl hover:cursor-pointer`}/>
                        </Link>
                    </div>

                </div>

                <form action={signOut}>
                    <Button className={`w-full justify-center flex items-center gap-4 mt-16`}>
                        Выйти
                        <FaUserAltSlash className={`text-xl`}/>
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default ProfileIdPage;
