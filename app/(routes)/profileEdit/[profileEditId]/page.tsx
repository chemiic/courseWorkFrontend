import {NextPage} from "next";
import updateProfileInfo from "@/actions/updateProfileInfo";
import Container from "@/components/ui/container";
import { FaInfo, FaUser, FaUserAltSlash} from "react-icons/fa";
import Button from "@/components/ui/button";
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import getProfile from "@/actions/getProfile";
import Link from "next/link";

interface ProfileIdProps {
    params: {
        ProfileId: string
    }
}
const ProfileEditPage:NextPage<ProfileIdProps> = async  ({params}) => {
    const profileData = await getProfile(params.ProfileId)
    const saveChanges = async (formData: FormData) => {
        "use server"
        const first_nameInput =  formData.get('first_nameInput') as string
        const last_nameInput =  formData.get('last_nameInput') as string
        const patronymicInput =  formData.get('patronymicInput') as string
        const addressInput =  formData.get('addressInput') as string
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)
        const profileEditId = await supabase.auth.getUser()
        updateProfileInfo({
            first_name:  first_nameInput,
            last_name:  last_nameInput,
            patronymic:  patronymicInput,
            address:  addressInput,
        })
        redirect(`/profile/${profileEditId.data.user?.id}`)
    }
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

    return(
        <Container className={`items-stretch justify-between`}>
            <h1 className={`text-3xl mt-6 font-bold`}>Профиль</h1>
            <div className={` py-10 w-[90vw] max-w-full`}>
                <div className={`flex gap-10 my-6 relative flex-col sm:flex-row items-center`}>
                    <div className={`rounded-full bg-gray-200 w-[220px] h-[220px] flex items-center justify-center`}>
                        <FaUser className={`text-[140px]`}/>
                    </div>

                    <form action={saveChanges} className={`flex justify-between`}>
                        <div className={`flex flex-col gap-2 text-xl`}>
                            <div className={`flex gap-3 items-center  flex-col sm:flex-row`}><span>Имя: </span>
                                <input
                                    name={`first_nameInput`}
                                    placeholder={profileData.first_name}
                                />
                            </div>
                            <div className={`flex gap-1 items-center flex-col sm:flex-row` }><span>Фамилия: </span>
                                <input
                                    name={`last_nameInput`}
                                    placeholder={profileData.last_name}
                                />
                            </div>
                            <div className={`flex gap-1 items-center flex-col sm:flex-row` }><span>Отчество: </span>
                                <input
                                    name={`patronymicInput`}
                                    placeholder={profileData.patronymic}
                                />
                            </div>
                            <div className={`flex gap-1 items-center flex-col sm:flex-row` }><span>Адрес: </span>
                                <input
                                    name={`addressInput`}
                                    placeholder={profileData.address}
                                />
                            </div>
                            <Button className={`text-sm `}>Сохранить</Button>
                        </div>
                        <Link href={`/profile/${profileEditId.data.user?.id}`} className={`absolute right-0 top-0`}>
                            <FaInfo className={`text-2xl border-black border-2 rounded-full p-1 hover:cursor-pointer`}/>
                        </Link>
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
    )

}
export default ProfileEditPage;