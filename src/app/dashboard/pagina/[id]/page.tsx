import { PersonajeCard } from '@/components/personaje-card';
import { PaginaCard } from '@/components/pagina-card';
import { FaHome } from "react-icons/fa";

const getPaginaData = async ( num: any) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${num.id}`
  );
  const data = await response.json();

  return [data.results, num.id] || {};
};

export default async function Pagina({ params }: any) {
  const array = await getPaginaData(params);
  const data = array[0];
  const numero = Number(array[1]);

  return (
    <div className="bg-fondo2 bg-cover bg-center flex flex-col justify-items-stretch min-h-screen">
      <div className='grid grid-cols-3 pt-2 pb-4'>
        <div></div>
        <div className="flex text-4xl justify-center text-lime font-bold text-center" style={{textShadow: "2px 2px 2px darkgreen"}}>Personajes</div>
        <div className='flex items-center justify-center text-4xl text-lime '>
        <a href="/dashboard"><FaHome className='drop-shadow-s1'/></a></div>
        </div>
      <div className="items-center justify-center flex flex-col gap-4">

        <div className="flex items-center justify-center gap-y-8 gap-x-2 flex-wrap p-3">
          {data.map((personaje: any) => (
            <PersonajeCard personaje={personaje} numero={numero} key={data.name} />
            ))}
        </div>
        <PaginaCard numero={numero+1}/>
      </div>
    </div>
  );
}