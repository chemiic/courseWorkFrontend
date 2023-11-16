import {NextPage} from "next";
import getProducts from "@/actions/getProducts";
import {Product} from "@/types/types";
import getSizes from "@/actions/getSizes";
import getColors from "@/actions/getColors";
import getCategory from "@/actions/getCategory";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import Filter from "@/app/(routes)/category/[categoryId]/components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilter from "@/app/(routes)/category/[categoryId]/components/mobile-filter";

export const revalidate = 0;

interface CategoryIdPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

const CategoryIdPage: NextPage<CategoryIdPageProps> = async ({params, searchParams}) => {
    const products: Product[] = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    });

    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getCategory(params.categoryId);

    return (
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboard} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilter sizes={sizes} colors={colors}/>
                        <div className="hidden lg:flex flex-col lg:gap-y-4">
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
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CategoryIdPage;