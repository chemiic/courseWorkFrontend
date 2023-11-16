"use client";

import {type FC, useEffect, useState} from 'react';
import {formatter} from "@/lib/utils";

interface CurrencyProps {
    value: string | number;
}

const Currency: FC<CurrencyProps> = ({value}) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect((): void => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    );
};

export default Currency;
