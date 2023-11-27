'use client'
import Link from 'next/link'
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import {useSupabaseClient} from "@supabase/auth-helpers-react";
import {useRouter} from "next/navigation";
import {Input} from "@material-tailwind/react";
import {useState} from "react";


export default function Login() {
  const router = useRouter()
  const supabaseClient = useSupabaseClient();
  const [resultMessage, setResultMessage] = useState('')
  const signIn = async (formData: FormData) => {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setResultMessage(`Ошибка`)
    }

    return router.push('/')
  }

  const signUp = async (formData: FormData) => {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
        data:{
          first_name:  'first_nameInput',
          last_name:  'last_nameInput',
          patronymic:  'patronymicInput',
          address:  'addressInput'
        }
      }
    })

    if (error) {
       setResultMessage(`Ошибка`)
    }

    setResultMessage('Подтвердите Email для продолжения')
  }


  return (
      <Container>
        <div className="flex flex-col justify-between max-w-[100%] w-[100vw] py-10 px-6 gap-4 h-full">
          <Link href="/" className={`w-fit`}>
            <Button className={`w-[150px] flex items-center rounded-0 relative justify-center group`}>
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
              Назад
            </Button>
          </Link>

          <form
              className="animate-in flex flex-col mx-auto w-full justify-center gap-2 text-foreground sm:max-w-sm"
              action={signIn}
          >
            <label className="text-md" htmlFor="email">
              Email
            </label>
            <Input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                label="you@example.com"
                required
            />
            <label className="text-md" htmlFor="password">
              Пароль
            </label>
            <Input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                type="password"
                name="password"
                label="••••••••"
                required
            />
            <Button>
              Войти
            </Button>
            <Button
                formAction={signUp}
                className="bg-transparent text-black border-2 border-black hover:border-[#9E00FF] hover:text-white"
            >
              Зарегестрироваться
            </Button>
            {resultMessage && (
                <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                  {resultMessage}
                </p>
            )}
          </form>
        </div>
      </Container>
  )
}
