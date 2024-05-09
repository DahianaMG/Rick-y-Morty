'use client';

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export const DeletePlantButton = ({ planta }: any) => {
  const supabase = createClient();
  const router = useRouter();

  const onDelete = async () => {
    await supabase.from('plantas').delete().eq('id', planta.id);

    router.push('/dashboard/plantas');
  };

  return (
    <button className="cursor-portal px-5 mx-1 bg-transparent flex items-center p-3 text-lime font-bold border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)", textShadow: "2px 2px 2px darkgreen"}} onClick={onDelete}>Eliminar</button>
  );
}