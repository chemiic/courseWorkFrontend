import {NextPage} from "next";
import Container from "@/components/ui/container";
import getProducts from "@/actions/getProducts";
import Catalog from "@/app/(routes)/catalog/components/catalog";
import Button from "@/components/ui/button";
import Link from "next/link";

const  CatalogPage:NextPage = async () => {
    const products = await getProducts()
    return (
        <Container className={`py-10`}>
            <Link href="/" className={`w-fit block`}>
                <Button className={`w-[180px] flex items-center rounded-0 relative justify-center group rounded-xl`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute top-[12px] left-5 mr-2 h-6 w-4 transition-transform group-hover:-translate-x-1"
                    >
                        <polyline points="15 18 9 12 15 6" />
                    </svg>{' '}
                    На главную
                </Button>
            </Link>
            <h1 className={`text-3xl mt-6 font-bold`}>Каталог</h1>
            <div className={`py-6 w-[100vw] max-w-full`}>
                <Catalog products={products}/>
            </div>
        </Container>
    )
}
export default CatalogPage