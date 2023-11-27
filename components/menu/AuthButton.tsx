'use client'
import Link from 'next/link'
import Button from "@/components/ui/button";
import {FaUser} from "react-icons/fa";
import {redirect} from 'next/navigation'
import {useSupabaseClient, useUser} from "@supabase/auth-helpers-react";

const  AuthButton =  () => {
  const supabaseClient = useSupabaseClient();
  const user  = useUser()
  const toProfile = async () => {
    const profileId = await supabaseClient.auth.getUser()
    return redirect(`/profile/${profileId.data.user?.id}`)
  }

  return user ? (
    <div className="flex items-center gap-4">
      <form action={toProfile}>
        <Button className="flex items-center sm:gap-2 text-[0px] sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5">
          <FaUser className={`text-white text-sm `}/>
          {user.email}
        </Button>
      </form>
    </div>
  ) : (
    <Link href="/login">
      <Button className={`px-4 py-2 sm:px-5 sm:py-2.5`}>
        <FaUser/>
      </Button>
    </Link>
  )
}
export default AuthButton;