import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Button from "@/components/ui/button";
import {FaUser, FaUserAltSlash} from "react-icons/fa";

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/')
  }

  return user ? (
    <div className="flex items-center gap-4">
      <form action={signOut}>
        <Button className="flex items-center sm:gap-2 text-[0px] sm:text-sm">
          {user.email}
          <FaUserAltSlash className={`text-sm`}/>
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
