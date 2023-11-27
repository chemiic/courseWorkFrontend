"use client"

import {Product} from "@/types/types";
import {FC, SetStateAction, useState} from "react";
import ProductList from "@/components/product-list";
import CatalogPagination from "@/app/(routes)/catalog/components/catalogPagination";
import {Select, Option, Input} from "@material-tailwind/react";
import Button from "@/components/ui/button";
import { motion } from "framer-motion";

interface CatalogProps{
    products: Product[];
}
const Catalog: FC<CatalogProps> = ({products}) => {
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12
    const currentCatalogData = () => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return filteredProducts.slice(firstPageIndex, lastPageIndex);
    };

    const [formFactor, setFormFactor] = useState('')
    const [color, setColor] = useState('')
    const [priceFrom, setPriceFrom] = useState('')
    const [priceTo, setPriceTo] = useState('')


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        let newArr: any[] = []
        if (formFactor !== ''){
            if (newArr.length!==0){

                newArr = newArr.flat(1).filter(item=>{
                    if(item.form_factor === formFactor){
                        return item
                    }
                })
            } else {
                newArr.push(products.filter(item=>{
                    if(item.form_factor === formFactor){
                        return item
                    }
                }))
            }
        } if (color !=='' ){
            if (newArr.length!==0){

                newArr = newArr.flat(1).filter(item=>{
                    if(item.color === color){
                        return item
                    }
                })
            } else {
                newArr.push(products.filter(item=>{
                    if(item.color === color){
                        return item
                    }
                }))
            }
        } if (priceFrom !=='' && priceTo !==''){
            if (newArr.length!==0){

                newArr = newArr.flat(1).filter(item=>{
                    if((item.price > Number(priceFrom) || item.price == Number(priceFrom)) &&
                        (item.price < Number(priceTo) || item.price == Number(priceTo))){
                        return item
                    }
                })
            } else {
                newArr.push(products.filter(item=>{
                    if((item.price > Number(priceFrom) || item.price == Number(priceFrom)) &&
                        (item.price < Number(priceTo) || item.price == Number(priceTo))){
                        return item
                    }
                }))
            }
        } if (priceFrom !=='' && priceTo ===''){
            if (newArr.length!==0){
                newArr = newArr.flat(1).filter(item=>{
                    if(item.price > Number(priceFrom) || item.price == Number(priceFrom)){
                        return item
                    }
                })
            } else {
                newArr.push(products.filter(item=>{
                    if(item.price > Number(priceFrom) || item.price == Number(priceFrom)){
                        return item
                    }
                }))
            }
        } if (priceTo !=='' && priceFrom === ''){
            if (newArr.length!==0){
                newArr = newArr.flat(1).filter(item=>{
                    if(item.price < Number(priceTo) || item.price == Number(priceTo)){
                        return item
                    }
                })
            } else {
                newArr.push(products.filter(item=>{
                    if(item.price < Number(priceTo) || item.price == Number(priceTo)){
                        return item
                    }
                }))
            }
        }
        if (newArr.length !== 0) {
            // @ts-ignore
            setFilteredProducts(newArr.flat(1))
        } else {
            setFilteredProducts(products)
        }
        setCurrentPage(1)
    }
    const handleClear = ()=>{
        setFormFactor("")
        setColor("")
        setPriceFrom("")
        setPriceTo("")
    }
    return (
        <>
        <motion.form className={`pt-6 pb-10 flex flex-wrap 2xl:flex-nowrap justify-center gap-6 items-center`}
             onSubmit={handleSubmit}
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0, }}
             viewport={{ once: true }}
             transition={{
                 type: "spring",
                 duration: 2
             }}
        >
            <Select
                size={`md`}
                label={`Типоразмер корпуса`}
                value={formFactor}
                onChange={e => setFormFactor(e!)}
            >
                <Option value={"SFF"}>SFF</Option>
                <Option value={"Mini-Tower"}>Mini-Tower</Option>
                <Option value={"Mid-Tower"}>Mid-Tower</Option>
                <Option value={"Открытый стенд"}>Открытый стенд</Option>
            </Select>
            <Select
                size={`md`}
                label={`Цвет`}
                value={color}
                onChange={e => setColor(e!)}
            >
                <Option value={"Черный"}>Черный</Option>
                <Option value={"Фиолетовый"}>Фиолетовый</Option>
                <Option value={"Белый"}>Белый</Option>
            </Select>
            <div className={`flex gap-3 sm:flex-row flex-col w-full`}>
                <Input
                    className="rounded-md px-4 py-2 bg-inherit border mb-6"
                    label={"Цена от"}
                    value={priceFrom}
                    onChange={e=>setPriceFrom(e.target.value)}

                />
                <Input
                    className="rounded-md px-4 py-2 bg-inherit border mb-6"
                    label={"Цена до"}
                    value={priceTo}
                    onChange={e=>setPriceTo(e.target.value)}
                />
            </div>
            <Button className={`rounded-lg`} onClick={handleClear}>Очистить</Button>
            <Button className={`rounded-lg`}>Применить</Button>
        </motion.form>
            <ProductList products={currentCatalogData()}/>
            <CatalogPagination
                currentPage={currentPage}
                totalCount={filteredProducts.length}
                pageSize={pageSize}
                onPageChange={(page: SetStateAction<number>) => {setCurrentPage(page)}}
            />
        </>
    )
}
export default Catalog