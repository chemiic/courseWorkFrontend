import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
const getProduct = async (productId:string) => {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    let { data:product, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', String(productId))

    if (error){
        console.log(error)
    }
    return product?.[0];
};

export default getProduct;
