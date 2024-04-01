import { LoginForm } from "@/components/login-form";

export default function Home() {
  return (
    <main className="">
      <div className="bg-fondo2 bg-cover flex items-center justify-center p-2 flex-col justify-items-stretch min-h-screen">
        <div className="bg-transparent flex items-center justify-center h-screen">
          <div className="bg-transparent flex flex-col items-center gap-4 p-4 w-[400px] border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}>
            <img src="/rickmortylogin.png" width={200} height={200} alt="" />
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
