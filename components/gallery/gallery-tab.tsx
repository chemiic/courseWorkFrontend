import {Tab} from "@headlessui/react";
import Image from "next/image";
import {cn} from "@/lib/utils";


const GalleryTab = (image: any) => {
    return (
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
            {({selected}) => (
                <div>
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                        <Image fill
                               sizes={"(max-width: 768px) 300px, (max-width: 1200px) 300px, 300px"}
                               src={image.image}
                               alt="Image"
                               className="object-cover object-center" />
                    </span>
                    <span className={cn("absolute inset-0 ring-2 ring-offset-2 rounded-md", selected ? "ring-black" : "ring-transparent")} />
                </div>
            )}
        </Tab>
    );
};

export default GalleryTab;
