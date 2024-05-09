import { PlantaCard } from '@/components/planta-card';
import { FaHome } from "react-icons/fa";
import { createServerClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export const revalidate = 0;

export default async function PlantasPage() {
  const supabase = createServerClient();
  const { data } = await supabase.from('plantas').select('*').order('id', { ascending: true });
  const user = await supabase.auth.getUser();

  if (user.error!==null) {
    return redirect('/');
  }
    
    return (
      <div className="cursor-oblea bg-fondo2 bg-cover bg-center flex flex-col justify-items-stretch min-h-screen">
        <div className='mt-2 flex flex-col items-center justify-center'><img src="/pvzlogo.png" width={300} height={200} alt="plantasvszombies-logo" /></div>
      <div className='grid grid-cols-3 pt-2 pb-4 mt-2'>
        <div></div>
        <div className="flex justify-center text-4xl text-lime font-bold text-center" style={{textShadow: "2px 2px 2px darkgreen"}}>Plantas</div>
        <div className='flex items-center justify-center text-4xl text-lime '>
        <a href="/dashboard" className='cursor-portal'><FaHome className='drop-shadow-s1'/></a></div>
        </div>
      <div className="items-center justify-center flex flex-col gap-4">
            <div className="grid grid-cols-2 grid-flow-row sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 flex items-center justify-center gap-y-8 gap-x-2 flex-wrap p-3">
              {data?.map((planta: any) => (
                <PlantaCard planta={planta} key={planta.id} />
              ))}
            </div>
            <button className="cursor-portal px-5 mx-1 mb-6 bg-transparent flex items-center p-3 border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}>
            <a href="/dashboard/plantas/create" className='cursor-portal'>
             <p className="text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Crear planta</p>
            </a>
            </button>
        </div>
      </div>
    );
}