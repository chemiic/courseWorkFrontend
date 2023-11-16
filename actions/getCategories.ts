import {Category} from "@/types";

const URL: string = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
    const res: Response = await fetch(URL);

    return res.json();
};

export default getCategories;
