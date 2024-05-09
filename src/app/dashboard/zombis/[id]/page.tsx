import { createServerClient } from '@/utils/supabase/server';
import { DeleteZombiButton } from '@/components/delete-zombi-button';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { FaHome } from "react-icons/fa";

export default async function ZombiPorIdPage({ params }: any) {
  const supabase = createServerClient();
  const { data } = await supabase.from('zombis').select('*').eq('id', params.id).single();
  const user = await supabase.auth.getUser();

  if (user.error!==null) {
    return redirect('/');
  }

  return (
    <div className='cursor-oblea bg-fondo2 bg-cover bg-center flex flex-col justify-items-stretch min-h-screen'>
    <div className="flex flex-col gap-4 w-full justify-center items-center">
      <div className='grid grid-cols-3 pt-2 pb-4 w-full'>
        <div></div>
        <div className='flex items-center justify-center'>
          <button
            className="cursor-portal px-5 mx-1 mt-1 mb-1 bg-transparent flex items-center p-3 border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}>
            <a href="/dashboard/zombis" className="cursor-portal text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Atrás</a>
          </button>
        </div>
        <div className='flex items-center justify-center text-4xl text-lime '>
        <a href="/dashboard" className='cursor-portal'><FaHome className='drop-shadow-s1'/></a></div>
      </div>
      
      <div className="bg-transparent flex flex-col items-center gap-2 w-300 sm:w-[400px] md:w-[400px] lg:w-[400px] rounded p-3 border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}>
      <h1 className="text-2xl text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>{data?.name}</h1>

      <Image
        className="rounded-xl"
        src={data?.image}
        width={200}
        height={300}
        alt={data?.name}
      />
      
      <h3 className='text-center'><span className="text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}></span> {data?.descripcion}</h3>
      <h3><span className="text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Dureza:</span> {data?.dureza}</h3>
      </div>

      <div className="flex items-center mb-20">
      <button
        className="cursor-portal px-5 mx-1 bg-transparent flex items-center p-3 border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}>
        <a href={`/dashboard/zombis/${data?.id}/edit`} className="cursor-portal text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Editar</a>
      </button>
      <DeleteZombiButton zombi={data} />
      </div>
      
    </div>
    </div>
  );
}
