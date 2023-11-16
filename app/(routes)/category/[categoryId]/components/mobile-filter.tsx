"use client";

import {type FC, useState} from 'react';
import {Color, Size} from "@/types/types";
import Button from "@/components/ui/button";
import {BiPlus} from "react-icons/bi";
import {Dialog} from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import {IoClose} from "react-icons/io5";
import Filter from "@/app/(routes)/category/[categoryId]/components/filter";

interface MobileFilterProps {
    sizes: Size[];
    colors: Color[];
}

const MobileFilter: FC<MobileFilterProps> = ({sizes, colors}) => {
    const [open, setOpen] = useState<boolean>(false);

    const onOpen = (): void => {
        setOpen(true);
    };

    const onClose = (): void => {
        setOpen(false);
    };

    return (
        <>
            <Button
                onClick={onOpen}
                className="flex items-center gap-x-2 lg:hidden">
                Filters
                <BiPlus size={20} />
            </Button>
            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
                <div className="fixed inset-0 bg-black bg-opacity-25" />
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto flex h-auto w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<IoClose size={15} onClick={onClose} />} />
                        </div>
                        <div className="p-4">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
};

export default MobileFilter;
