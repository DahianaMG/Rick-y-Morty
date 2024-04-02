import Image from 'next/image';
import { FaHome } from "react-icons/fa";

const getPersonajeData = async (id:string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  
  const data = await response.json();
  
  return data || {};
};

export default async function PersonajePorIdPage({ params }: any) {
  const data = await getPersonajeData(params.id);
  let atras = ""
  let pagina = (Math.ceil(params.id/20))
  if (params.id < 21)
    atras = "/dashboard";
  else
    atras = `/dashboard/pagina/${pagina}`;

  return (
    <div className='cursor-oblea bg-fondo2 bg-cover bg-center flex flex-col justify-items-stretch min-h-screen'>
    <div className="flex flex-col gap-4 w-full justify-center items-center">
      <div className='grid grid-cols-3 pt-2 pb-4 w-full'>
        <div></div>
        <div></div>
        <div className='flex items-center justify-center text-4xl text-lime '>
        <a href="/dashboard" className='cursor-portal'><FaHome className='drop-shadow-s1'/></a></div>
      </div>
      
      <div className="bg-transparent flex flex-col items-center gap-2 w-300 rounded p-3 border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}>
      <h1 className="text-2xl text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>{data.name}</h1>

      <Image
        className="rounded-xl"
        src={data.image}
        width={300}
        height={300}
        alt={data.name}
      />
      
      <h3><span className="text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Estado:</span> {data.status}</h3>
      <h3><span className="text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Especie:</span> {data.species}</h3>
      <h3><span className="text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Origen:</span> {data.origin.name}</h3>
      </div>

      <button
        className="cursor-portal px-5 mx-1 mt-8 bg-transparent flex items-center p-3 border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}>
        <a href={atras} className="cursor-portal text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Atrás</a>
      </button>
    </div>
    </div>
  );
}
