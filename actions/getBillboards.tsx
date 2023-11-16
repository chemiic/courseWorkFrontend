import {Billboard} from "@/types";

const URL: string = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (): Promise<Billboard[]> => {
    const res: Response = await fetch(URL);

    return res.json();
};

export default getBillboards;
