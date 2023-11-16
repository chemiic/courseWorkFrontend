import {Color} from "@/types";

const URL: string = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
    const res: Response = await fetch(URL);

    return res.json();
};

export default getColors;
