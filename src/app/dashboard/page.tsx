import { PersonajeCard } from '@/components/personaje-card';
import { PaginaCard } from '@/components/pagina-card';
import { FaHome } from "react-icons/fa";

const getDashboardData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/dashboard`
      );
      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error(error);
  
      return { data: [] };
    }
  };
  
  export default async function DashboardPage() {
    const { data } = await getDashboardData();
    const num = 2;
    
    return (
      <div className="bg-fondo2 bg-cover bg-center flex flex-col justify-items-stretch min-h-screen">
      <div className='grid grid-cols-3 pt-2 pb-4'>
        <div></div>
        <div className="flex justify-center text-4xl text-lime font-bold text-center" style={{textShadow: "2px 2px 2px darkgreen"}}>Personajes</div>
        <div className='flex items-center justify-center text-4xl text-lime '>
        <a href="/dashboard"><FaHome className='drop-shadow-s1'/></a></div>
        </div>
      <div className="items-center justify-center flex flex-col gap-4">
            <div className="flex items-center justify-center gap-y-8 gap-x-2 flex-wrap p-3">
              {data.map((personaje: any) => (
                <PersonajeCard personaje={personaje} key={personaje.name} />
              ))}
            </div>
            <PaginaCard num={num}/>
        </div>
      </div>
    );
  }