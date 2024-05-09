'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

interface EditZombiFormProps {
  zombi: any;
}

export const EditZombiForm = ({ zombi }: EditZombiFormProps) => {
  const supabase = createClient();
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name')?.toString();
    const image = formData.get('image')?.toString();
    const descripcion = formData.get('descripcion')?.toString();
    const dureza = formData.get('dureza')?.toString();

    await supabase.from('zombis').update({ name, image, descripcion, dureza }).eq('id', zombi.id);

    router.push('/dashboard/zombis');
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
    <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
      <input
        name="name"
        type="text"
        placeholder="Nombre"
        className="cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full"
        defaultValue={zombi?.name}
      />
    </div>
    <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
      <input
        name="image"
        type="text"
        placeholder="Imagen"
        className="cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full"
        defaultValue={zombi?.image}
      />
    </div>
    <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
      <textarea
        name="descripcion"
        id="descripcion"
        rows={2}
        placeholder="Descripcion"
        className='cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full'
        defaultValue={zombi?.descripcion}>
      </textarea>
    </div>
    <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
      <input
        name="dureza"
        type="text"
        placeholder="Dureza"
        className="cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full"
        defaultValue={zombi?.dureza}/>
    </div>
    <button className='cursor-portal p-2 bg-secondary text-white rounded-lg shadow-lg' type="submit">Editar</button>
    </form>
  );
};