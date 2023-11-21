
"use client"
import {FaEdit} from "react-icons/fa";
import {FC, useState} from "react";
import Button from "@/components/ui/button";
import {Input} from "@material-tailwind/react";
import {ProfileData} from "@/types/types";
import updateProfileInfo from "@/actions/updateProfileInfo";
import {createClient} from "@/utils/supabase/client";


interface profileInfoProps {
    profileData: ProfileData
}
const profileInfo: FC<profileInfoProps> = ({profileData}) => {
    const [isEdit,setIsEdit] = useState(false)

    const [first_nameInput, setFirst_nameInput] = useState(profileData.first_name)
    const [last_nameInput, setLast_nameInput] = useState(profileData.last_name)
    const [patronymicInput, setPatronymicInput] = useState(profileData.patronymic)
    const [addressInput, setAddressInput] = useState(profileData.address)
    const saveChanges = async (e:any) => {
        e.preventDefault
        // updateProfileInfo({
        //     first_name:  first_nameInput,
        //     last_name:  last_nameInput,
        //     patronymic:  patronymicInput,
        //     address:  addressInput,
        // })
        const supabase = createClient()
        const { data, error } = await supabase
            .from('profiles')
            .update({
                first_name:  profileData.first_name,
                last_name:  profileData.last_name,
                patronymic:  profileData.patronymic,
                address:  profileData.address,
            })
    }


    return(
        <form action={saveChanges}>
            {isEdit ?
                <div className={`flex flex-col gap-2 text-xl`}>
                    <div className={`flex gap-3 items-center`}><span>Имя: </span>
                        <Input
                            label={profileData.first_name}
                            name={profileData.first_name}
                            value={first_nameInput}
                            onChange={(e)=>setFirst_nameInput(e.target.value)}
                        />
                    </div>
                    <div className={`flex gap-1`}><span>Фамилия: </span>
                        <Input
                            label={profileData.last_name}
                            name={profileData.last_name}
                            value={last_nameInput}
                            onChange={(e)=>setLast_nameInput(e.target.value)}
                        />
                    </div>
                    <div className={`flex gap-1`}><span>Отчество: </span>
                        <Input
                            label={profileData.patronymic}
                            name={profileData.patronymic}
                            value={patronymicInput}
                            onChange={(e)=>setPatronymicInput(e.target.value)}
                        />
                    </div>
                    <div className={`flex gap-1`}><span>Адрес: </span>
                        <Input
                            label={profileData.address}
                            name={profileData.address}
                            value={addressInput}
                            onChange={(e)=>setAddressInput(e.target.value)}
                        />
                    </div>
                    <Button className={`text-sm `}>Сохранить</Button>
                </div>
             :
                <div className={`flex flex-col gap-2 text-xl`}>
                    <div><span>Имя: </span>{profileData.first_name}</div>
                    <div><span>Фамилия: </span>{profileData.last_name}</div>
                    <div><span>Отчество: </span>{profileData.patronymic}</div>
                    <div><span>Адрес: </span>{profileData.address}</div>
                </div>
            }

            <FaEdit onClick={()=>setIsEdit(!isEdit)} className={`text-2xl hover:cursor-pointer ml-24 absolute right-0 top-0`}/>
        </form>
    )

}
export default profileInfo;