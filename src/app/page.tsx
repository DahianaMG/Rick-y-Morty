import { LoginForm } from "@/components/login-form";
import { createServerClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  if (user.error===null) {
    redirect('/dashboard')
  }
  
  return (
    <main className="">
      <div className="cursor-oblea bg-fondo1 bg-cover flex items-center justify-center p-2 flex-col justify-items-stretch min-h-screen">
      <div className='mt-2 flex flex-col items-center justify-center'><img src="/pvzlogo.png" width={300} height={200} alt="plantasvszombies-logo" /></div>
        <div className="bg-transparent flex items-center justify-center m-5">
          <div className="bg-transparent flex flex-col items-center gap-4 p-4 sm:w-[400px] md:w-[400px] lg:w-[400px] border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}>
            <img src="/plantasvszombieslogin.png" width={200} height={200} alt="" />
            <div className="text-white">
              <h1 className="text-3xl text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Iniciar sesión</h1>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
