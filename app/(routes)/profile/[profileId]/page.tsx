'use client'
import {NextPage} from "next";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import {FaEdit, FaInfo, FaUser, FaUserAltSlash} from "react-icons/fa";
import { useSupabaseClient} from "@supabase/auth-helpers-react";
import {useEffect, useState} from "react";
import { motion } from "framer-motion";
import {useRouter} from "next/navigation";
import {Input} from "@material-tailwind/react";
import {toast} from "react-hot-toast";
interface ProfileIdProps {
    params: {
        ProfileId: string
    }
}

const ProfileIdPage: NextPage<ProfileIdProps> =  ({params}) => {
    const supabaseClient = useSupabaseClient();
    const [profileData,setProfileData] = useState({
        first_name: '',
        last_name: '',
        patronymic: '',
        address: '',
    })
    const router = useRouter()
    const [isEdit,setIsEdit] = useState(false)
    const handleEdit = ()=>{
        setIsEdit(()=>!isEdit)
    }
    useEffect( () => {
        supabaseClient
            .from('profiles')
            .select('*')
            .then((res)=>{
                setProfileData(res.data![0])
                setFirst_nameInput(res.data![0].first_name)
                setLast_nameInput(res.data![0].last_name)
                setPatronymicInput(res.data![0].patronymic)
                setAddressInput(res.data![0].address)
            })
    }, [isEdit]);
    const [first_nameInput, setFirst_nameInput] = useState(profileData.first_name)
    const [last_nameInput, setLast_nameInput] = useState(profileData.last_name)
    const [patronymicInput, setPatronymicInput] = useState(profileData.patronymic)
    const [addressInput, setAddressInput] = useState(profileData.address)
    const saveChanges = async (formData: FormData) => {
        const first_nameInput =  formData.get('first_nameInput') as string
        const last_nameInput =  formData.get('last_nameInput') as string
        const patronymicInput =  formData.get('patronymicInput') as string
        const addressInput =  formData.get('addressInput') as string
        const user = await supabaseClient.auth.getUser()
        const { data, error } = await supabaseClient
            .from('profiles')
            .update({
                first_name:  first_nameInput,
                last_name:  last_nameInput,
                patronymic:  patronymicInput,
                address:  addressInput,
            })
            .eq('id', `${user.data.user?.id}`)
        if (error){
            toast.error("Ошибка.")
        } else{
            setTimeout(()=>{
                toast.success("Данные изменены")
                setIsEdit(false)
            })
        }
    }
    const signOut = async () => {
        await supabaseClient.auth.signOut()
        return router.push('/')
    }

    return (
        <Container className={`items-stretch justify-between`}>
            <h1 className={`text-3xl mt-6 font-bold`}>Профиль</h1>
            <div className={` py-10 w-[90vw] max-w-full`}>
                <div className={`flex gap-10 my-6 relative flex-col sm:flex-row`}>
                    <div className={`rounded-full bg-gray-200 w-[220px] h-[220px] flex items-center justify-center `}>
                        <FaUser className={`text-[140px]`}/>
                    </div>
                {isEdit ?
                    <motion.form action={saveChanges} className={`flex justify-between`}
                                 initial={{ opacity: 0, x: -30 }}
                                 whileInView={{ opacity: 1, x: 0, }}
                                 viewport={{ once: true }}
                                 transition={{
                                     type: "spring",
                                     duration: 2
                                 }}>
                        <div className={`flex flex-col gap-2 text-xl`}>
                            <div className={`flex gap-3 items-center  flex-col sm:flex-row`}><span>Имя: </span>
                                <Input
                                    name={`first_nameInput`}
                                    label={profileData.first_name}
                                    value={first_nameInput}
                                    onChange={(e)=>setFirst_nameInput(e.target.value)}
                                />
                            </div>
                            <div className={`flex gap-1 items-center flex-col sm:flex-row` }><span>Фамилия: </span>
                                <Input
                                    name={`last_nameInput`}
                                    label={profileData.last_name}
                                    value={last_nameInput}
                                    onChange={(e)=>setLast_nameInput(e.target.value)}
                                />
                            </div>
                            <div className={`flex gap-1 items-center flex-col sm:flex-row` }><span>Отчество: </span>
                                <Input
                                    name={`patronymicInput`}
                                    label={profileData.patronymic}
                                    value={patronymicInput}
                                    onChange={(e)=>setPatronymicInput(e.target.value)}
                                />
                            </div>
                            <div className={`flex gap-1 items-center flex-col sm:flex-row` }><span>Адрес: </span>
                                <Input
                                    name={`addressInput`}
                                    label={profileData.address}
                                    value={addressInput}
                                    onChange={(e)=>setAddressInput(e.target.value)}
                                />
                            </div>
                            <Button className={`text-sm `}>Сохранить</Button>
                        </div>
                    </motion.form>
                    :


                        <div>
                            <motion.div className={`flex flex-col gap-2 text-xl`}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0, }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: "spring",
                                            duration: 2
                                        }}>
                                <div><span>Имя: </span>{profileData.first_name}</div>
                                <div><span>Фамилия: </span>{profileData.last_name}</div>
                                <div><span>Отчество: </span>{profileData.patronymic}</div>
                                <div><span>Адрес: </span>{profileData.address}</div>
                            </motion.div>
                        </div>

                }
                            <div className={`absolute right-0 top-0`} onClick={handleEdit}>
                                <FaEdit className={`text-2xl hover:cursor-pointer`}/>
                            </div>
                    </div>

                <motion.form
                    action={signOut}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0, }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        duration: 2
                    }}
                >
                    <Button className={`w-full justify-center flex items-center gap-4 mt-16`}>
                        Выйти
                        <FaUserAltSlash className={`text-xl`}/>
                    </Button>
                </motion.form>
            </div>
        </Container>
    );
};

export default ProfileIdPage;
