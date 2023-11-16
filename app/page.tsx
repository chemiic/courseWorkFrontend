import ProductList from "@/components/product-list";
import BillboardSlider from "@/components/billboard-slider";
import Image from "next/image";
import fx45 from "@/public/fx45.png"

export default async function Index() {


  const products = [
    {
      id: 'string',
      category:  {
        id: 'string',
        name: 'string',
        billboard: {
          id: "string",
          label: "string",
          imageUrl: "string",
        },
      },
      name: 'string',
      price: 'string',
      isFeatured: true,
      size: {
        id: 'string',
        name: 'string',
        value: 'string',
      },
      color:  {
        id: 'string',
        name: 'string',
        value: 'string',
      },
      images: ['',''],
    },
    {
      id: 'string',
      category:  {
        id: 'string',
        name: 'string',
        billboard: {
          id: "string",
          label: "string",
          imageUrl: "string",
        },
      },
      name: 'string',
      price: 'string',
      isFeatured: true,
      size: {
        id: 'string',
        name: 'string',
        value: 'string',
      },
      color:  {
        id: 'string',
        name: 'string',
        value: 'string',
      },
      images: ['',''],
    }
  ]
  const billboards = [
    {
      id: "string",
      label: "string",
      imageUrl: "string",
    },
    {
      id: "string",
      label: "string",
      imageUrl: "string",
    }
  ]

  return (
        <section>
          <Image src={fx45} alt={'fx45'}/>

          <ProductList title="Featured Products" products={products} />
        </section>
  )
}
