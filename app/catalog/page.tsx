import {NextPage} from "next";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import getProducts from "@/actions/getProducts";

const  CatalogPage:NextPage = async () => {
    const products = await getProducts()
    return (
        <Container>
            <h1 className={`text-3xl`}>Каталог</h1>
            <div className={`py-10 w-[100vw] max-w-full`}>
                <div className={`mx-auto flex items-center justify-center py-6`}>
                    <div>123</div>
                </div>
                <ProductList products={products}/>
            </div>
        </Container>
    )
}
export default CatalogPage