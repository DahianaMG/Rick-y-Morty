"use client";

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export const CreateZombiForm = () => {
  const supabase = createClient();
  const router = useRouter();

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name')?.toString();
        const image = formData.get('image')?.toString();
        const descripcion = formData.get('descripcion')?.toString();
        const dureza = formData.get('dureza')?.toString();

        await supabase.from('zombis').insert({ name, image, descripcion, dureza });

        router.push('/dashboard/zombis');
      }}
    >
      <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
        <input name="name" type="text" placeholder="Nombre" className='cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full' />
      </div>
      <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
        <input name="image" type="text" placeholder="Imagen" className='cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full' />
      </div>
      <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
        <textarea name="descripcion" id="descripcion" rows={2} placeholder="Descripcion" className='cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full'></textarea>
      </div>
      <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
        <input name="dureza" type="text" placeholder="Dureza" className='cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full' />
      </div>
      <button className='cursor-portal p-2 bg-secondary text-white rounded-lg shadow-lg' type="submit">Crear</button>
    </form>
  );
};