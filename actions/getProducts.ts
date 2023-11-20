import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
const getProducts = async () => {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    let { data:products, error } = await supabase
        .from('products')
        .select('*')
        .range(0, 100);

    if (error){
        console.log(error)
    }
    return products as any || [];
};

export default getProducts;
