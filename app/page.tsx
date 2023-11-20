import ProductList from "@/components/product-list";
import Image from "next/image";
import fx49 from "@/public/fx49.png"
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Link from "next/link";
import MainPageMegaAnimatedImageBlock from "@/components/mainPageMegaAnimatedImageBlock";
import HomePageGallery from "@/components/HomePageGallery";
import getProductsForBanner from "@/actions/getProductsForBanner";

export default async function Index() {

  const products = await getProductsForBanner()
    return (
        <section>
          <Image src={fx49} alt={'fx49'}/>
          <Container>
            <div className="py-10">
              <MainPageMegaAnimatedImageBlock/>
              <ProductList title="Модели" products={products}/>
              <Link href="/catalog" className="mx-auto block w-fit mt-6">
                <Button className="px-10">Смотреть все</Button>
              </Link>
              <HomePageGallery/>
            </div>
          </Container>
        </section>
  )
}
