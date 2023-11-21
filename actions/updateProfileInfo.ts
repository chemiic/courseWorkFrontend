import {ProfileData} from "@/types/types";
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
const updateProfileInfo = async (profileData:ProfileData) => {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const user = await supabase.auth.getUser()
    const { data, error } = await supabase
        .from('profiles')
        .update({
            first_name:  profileData.first_name,
            last_name:  profileData.last_name,
            patronymic:  profileData.patronymic,
            address:  profileData.address,
        })
        .eq('id', `${user.data.user?.id}`)

    if (error){
        console.log("Ошибка.")
    }
};

export default updateProfileInfo;
