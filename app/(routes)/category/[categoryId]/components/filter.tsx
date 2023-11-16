"use client";

import qs from "query-string";
import {type FC} from 'react';
import {Color, Size} from "@/types/types";
import {useRouter, useSearchParams} from "next/navigation";
import Button from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface FilterProps {
    valueKey: string;
    name: string;
    data: (Size | Color)[];
}

const Filter: FC<FilterProps> = ({valueKey, data, name}) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue: string | null = searchParams.get(valueKey);

    const onCLick = (id: string): void => {
      const current = qs.parse(searchParams.toString());

      const query = {
          ...current,
          [valueKey]: id
      };

        if (current[valueKey] === id ) {
            query[valueKey] = null
        }

        const url: string = qs.stringifyUrl({
            url: window.location.href,
            query
        }, {skipNull: true});

        router.push(url);
    };

    return (
        <div className="md-8">
            <h3 className="text-lg font-semibold">
                {name}
            </h3>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                {data.map(filter => (
                    <div key={filter.id} className="flex items-center">
                        <Button className={cn("rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                        selectedValue === filter.id && "bg-black text-white"
                        )}
                        onClick={() => onCLick(filter.id)}
                        >
                            {filter.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
