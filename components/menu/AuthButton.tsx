import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import Button from "@/components/ui/button";
import {FaUser} from "react-icons/fa";
import {redirect} from 'next/navigation'

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const toProfile = async () => {
    'use server'
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const profileId = await supabase.auth.getUser()
    return redirect(`/profile/${profileId.data.user?.id}`)
  }

  return user ? (
    <div className="flex items-center gap-4">
      <form action={toProfile}>
        <Button className="flex items-center sm:gap-2 text-[0px] sm:text-sm">
          {user.email}
        </Button>
      </form>
    </div>
  ) : (
    <Link href="/login">
      <Button>
        <FaUser/>
      </Button>
    </Link>
  )
}
