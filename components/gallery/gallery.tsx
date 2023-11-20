"use client";

import {Tab} from "@headlessui/react";
import GalleryTab from "@/components/gallery/gallery-tab";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";


const Gallery = (images: { images: any; }) => {
    const imageArr = images.images
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {imageArr.map((image: any, index: any) => (
                        <GalleryTab key={index} image={image}/>
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className="aspect-square w-full">

                {imageArr.map((image: string | StaticImport, index: Key | null | undefined) => (
                    <Tab.Panel key={index}>
                        <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                            <Image fill
                                   sizes={"(max-width: 768px) 600px, (max-width: 1200px) 600px, 600px"}
                                   src={image}
                                   alt="Image"
                                   className="object-cover object-center" />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
};

export default Gallery;
