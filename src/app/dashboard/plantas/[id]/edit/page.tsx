import { EditPlantForm } from '@/components/edit-plant-form';
import { createServerClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function EditPlant({ params }: any) {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('plantas')
    .select('*')
    .eq('id', params.id)
    .single();
  const user = await supabase.auth.getUser();

  if (user.error!==null) {
    return redirect('/');
  }

  return (
    <main>
    <div className="cursor-oblea bg-fondo2 bg-cover bg-center flex items-center justify-center p-2 flex-col justify-items-stretch min-h-screen">
    <div className="bg-transparent flex items-center justify-center mt-5">
      <div className="bg-transparent flex flex-col items-center gap-4 p-4 sm:w-[600px] md:w-[600px] lg:w-[600px] border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}>
        <img src="/plantasvszombiesedit.png" width={200} height={200} alt="" />
        <div className="text-white">
          <h1 className="text-3xl text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Editar planta</h1>
        </div>
        <EditPlantForm planta={data}/>
      </div>
    </div>
    <button
      className="cursor-portal px-5 mx-1 mt-8 mb-6 bg-transparent flex items-center p-3 border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}>
      <a href={`/dashboard/plantas/${data?.id}`} className="cursor-portal text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Atrás</a>
    </button>
  </div>
  </main>
  )
}