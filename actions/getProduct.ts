import {Product} from "@/types";

const URL: string = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
    const res: Response = await fetch(`${URL}/${id}`);

    return res.json();
};

export default getProduct;
