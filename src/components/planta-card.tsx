'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export const PlantaCard = ({ planta }: any) => {
  const router = useRouter()

  return (
    <div
      key={planta.id}
      className="bg-transparent cursor-portal flex flex-col items-center gap-2 w-25 sm:w-52 md:w-52 lg:w-52 rounded p-3 border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)"}}
      onClick={() => {
        router.push(`/dashboard/plantas/${planta.id}`);
      }}
    >
      <Image
        width={300}
        height={300}
        src={planta.image}
        alt={planta.name}
        className="w-24 h-24 rounded-xl"
      />
      <span className="text-lime font-bold" style={{textShadow: "2px 2px 2px darkgreen"}}>{planta.name}</span>
    </div>
  );
};
