import {ProfileData} from "@/types/types";
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {useSupabaseClient} from "@supabase/auth-helpers-react";
import {toast} from "react-hot-toast";
const updateProfileInfo = async (profileData:ProfileData) => {
    const supabaseClient = useSupabaseClient();
    const user = await supabaseClient.auth.getUser()
    const { data, error } = await supabaseClient
        .from('profiles')
        .update({
            first_name:  profileData.first_name,
            last_name:  profileData.last_name,
            patronymic:  profileData.patronymic,
            address:  profileData.address,
        })
        .eq('id', `${user.data.user?.id}`)

    if (error){
        toast.error("Ошибка.")
    }else{

        toast.success("Данные изменены")
    }
};

export default updateProfileInfo;
