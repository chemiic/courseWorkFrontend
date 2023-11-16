import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import BillboardSlider from "@/components/billboard-slider";

export default async function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

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
      <Container>
        <div className="space-y-10 pb-10">
          <BillboardSlider data={billboards} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" products={products} />
          </div>
        </div>
      </Container>
  )
}
