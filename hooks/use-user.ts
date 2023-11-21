import {create} from "zustand";
import {ProfileData} from "@/types/types";
import {persist} from "zustand/middleware";
import toast from "react-hot-toast";
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";

interface useCartStore {
    upDataProfile: (profileData: ProfileData) => void;
}

const useProfile = create(
    persist<useCartStore>((set, get)=> ({
        upDataProfile: async (profileData: ProfileData) => {
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
                return toast.error("Ошибка.")
            }
            return toast.success("Профиль изменен.")
        },
    }), {
        name: "profile-storage",
    })
);

export default useProfile;
