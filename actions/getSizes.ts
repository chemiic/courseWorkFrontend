import {Size} from "@/types";

const URL: string = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
    const res: Response = await fetch(URL);

    return res.json();
};

export default getSizes;
