import {NextPage} from "next";
import Container from "@/components/ui/container";
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Button from "@/components/ui/button";
import {FaUser, FaUserAltSlash} from "react-icons/fa";
import getProfile from "@/actions/getProfile";
import updateProfileInfo from "@/actions/updateProfileInfo";
import {Input} from "@material-tailwind/react";
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
    const saveChanges = async (formData: FormData) => {
        "use server"
        const first_nameInput =  formData.get('first_nameInput') as string
        const last_nameInput =  formData.get('last_nameInput') as string
        const patronymicInput =  formData.get('patronymicInput') as string
        const addressInput =  formData.get('addressInput') as string

        updateProfileInfo({
            first_name:  first_nameInput,
            last_name:  last_nameInput,
            patronymic:  patronymicInput,
            address:  addressInput,
        })

    }

    return (
        <Container className={`items-stretch justify-between`}>
            <h1 className={`text-3xl mt-6 font-bold`}>Профиль</h1>
            <div className={` py-10 w-[90vw] max-w-full`}>
                <div className={`flex gap-10 my-6 relative`}>
                    <div className={`rounded-full bg-gray-200 w-[220px] h-[220px] flex items-center justify-center`}>
                     <FaUser className={`text-[140px]`}/>
                    </div>

                    <form action={saveChanges}>
                        <div className={`flex flex-col gap-2 text-xl`}>
                            {profileData.first_name}
                            <div className={`flex gap-3 items-center`}><span>Имя: </span>
                                <input
                                    name={`first_nameInput`}
                                />
                            </div>
                            <div className={`flex gap-1`}><span>Фамилия: </span>
                                <input
                                    name={`last_nameInput`}
                                />
                            </div>
                            <div className={`flex gap-1`}><span>Отчество: </span>
                                <input
                                    name={`patronymicInput`}
                                />
                            </div>
                            <div className={`flex gap-1`}><span>Адрес: </span>
                                <input
                                    name={`addressInput`}/>
                            </div>
                            <Button className={`text-sm `}>Сохранить</Button>
                        </div>
                    </form>

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
