'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

interface EditPlantFormProps {
  planta: any;
}

export const EditPlantForm = ({ planta }: EditPlantFormProps) => {
  const supabase = createClient();
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name')?.toString();
    const image = formData.get('image')?.toString();
    const descripcion = formData.get('descripcion')?.toString();
    const tipo = formData.get('tipo')?.toString();
    const efectividad = formData.get('efectividad')?.toString();
    const precio = formData.get('precio')?.toString();

    await supabase.from('plantas').update({ name, image, descripcion, tipo, efectividad, precio }).eq('id', planta.id);

    router.push('/dashboard/plantas');
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
    <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
      <input
        name="name"
        type="text"
        placeholder="Nombre"
        className="cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full"
        defaultValue={planta?.name}
      />
    </div>
    <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
      <input
        name="image"
        type="text"
        placeholder="Imagen"
        className="cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full"
        defaultValue={planta?.image}
      />
    </div>
    <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
      <textarea
        name="descripcion"
        id="descripcion"
        rows={2}
        placeholder="Descripcion"
        className='cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full'
        defaultValue={planta?.descripcion}>
      </textarea>
    </div>
    <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
      <input
        name="tipo"
        type="text"
        placeholder="Tipo"
        className="cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full"
        defaultValue={planta?.tipo}/>
    </div>
    <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
      <input
        name="efectividad"
        type="text"
        placeholder="Efectividad"
        className='cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full'
        defaultValue={planta?.efectividad}/>
    </div>
    <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
      <input
        name="precio"
        type="text"
        placeholder="Precio"
        className='cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full'
        defaultValue={planta?.precio}/>
    </div>
    <button className='cursor-portal p-2 bg-secondary text-white rounded-lg shadow-lg' type="submit">Editar</button>
    </form>
  );
};