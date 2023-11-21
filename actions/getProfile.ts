import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
const getProfile = async (userId: string) => {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
    if (error){
        console.log(error)
    }
    return profile?.[0];
};

export default getProfile;
