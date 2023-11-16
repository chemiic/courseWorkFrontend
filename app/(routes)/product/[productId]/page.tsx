import {NextPage} from "next";
import getProduct from "@/actions/getProduct";
import getProducts from "@/actions/getProducts";
import {Product} from "@/types/types";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery/gallery";
import Info from "@/components/info";

interface ProductIdPageProps {
    params: {
        productId: string
    }
}


const ProductIdPage: NextPage<ProductIdPageProps> = async ({params}) => {
    const product: Product = await getProduct(params.productId);
    const suggestedProduct: Product[] = await getProducts({categoryId: product.category.id});

    return (
        <div className="bg-white">
            <Container>
                <div className="flex flex-col gap-y-4 px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={product.images}/>
                        <Info product={product} />
                    </div>
                    <hr className="my=10" />
                    <ProductList title="Related Items" products={suggestedProduct} />
                </div>
            </Container>
        </div>
    );
};

export default ProductIdPage;
