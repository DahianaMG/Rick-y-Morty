import { SignOut } from '@/components/signout-button';
import { createServerClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export const revalidate = 0;

export default async function DashboardPage() {
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  if (user.error!==null) {
    return redirect('/');
  }
    
    return (
      <div className="cursor-oblea bg-fondo2 bg-cover bg-center items-center justify-center p-2 flex flex-col justify-items-stretch min-h-screen">
        <div className='mt-2 flex flex-col items-center justify-center'><img src="/pvzlogo.png" width={300} height={200} alt="plantasvszombies-logo" /></div>
        <div className="bg-transparent flex items-center justify-center mt-5 mb-7">
          <div className="bg-transparent flex flex-col items-center gap-4 mx-2 p-4 sm:w-[400px] md:w-[400px] lg:w-[400px] border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}>
            <img src="/dash1.png" width={200} height={200} alt="" />
            <div className="text-white">
              <button
              className="cursor-portal px-5 mx-1 mt-3 mb-1 bg-transparent flex items-center p-3 border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}>
                <a href="/dashboard/plantas" className="cursor-portal text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Plantas</a>
              </button>
            </div>
          </div>

          <div className="bg-transparent flex flex-col items-center gap-4 mx-2 p-4 sm:w-[400px] md:w-[400px] lg:w-[400px] border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}>
            <img src="/dash2.png" width={200} height={200} alt="" />
            <div className="text-white">
              <button
              className="cursor-portal px-5 mx-1 mt-3 mb-1 bg-transparent flex items-center p-3 border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}>
                <a href="/dashboard/zombis" className="cursor-portal text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Zombis</a>
              </button>
            </div>
          </div>
        </div>
        <SignOut/>
      </div>
    );
}