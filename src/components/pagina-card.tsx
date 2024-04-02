'use client'

import { useRouter } from "next/navigation";

export const PaginaCard = ({ num, numero }: any) => {
  const router = useRouter()

return(
  <div className="flex items-center">
  <button
  key={num}
  className="cursor-portal px-5 mx-1 bg-transparent flex items-center p-3 border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}
  onClick={() => {
    if (numero == 3)
    router.push(`/dashboard`);
    else if (numero > 1)
    router.push(`/dashboard/pagina/${numero-2}`);
    else
    console.log("num, numero",num,numero);
  }}>
<p className="text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Anterior</p>
</button>
<button 
key={num}
className="cursor-portal px-5 mx-1 bg-transparent flex items-center p-3 border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}
  onClick={() => {
    if (num == 2)
      router.push(`/dashboard/pagina/${num}`);
    else if (numero==43)
    router.push(`/dashboard/pagina/${numero-1}`);
    else
      router.push(`/dashboard/pagina/${numero}`);
  }}>
  <p className="text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>Siguiente</p>
</button>
</div>
);
};