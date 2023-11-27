import {useSupabaseClient} from "@supabase/auth-helpers-react";
const getProfile = async () => {
    const supabaseClient = useSupabaseClient();

    const { data: profile, error } = await supabaseClient
        .from('profiles')
        .select('*')
    if (error){
        console.log(error)
    }
    return profile?.[0];
};

export default getProfile;
