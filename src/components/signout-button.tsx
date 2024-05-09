'use client';

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export const SignOut = () => {
  const router = useRouter();
  const supabase = createClient();
  const Logout = async () => {
    await supabase.auth.signOut();
    router.push('/dashboard/zombis');
  };

  return (
    <button className="cursor-portal px-5 mx-1 bg-transparent flex items-center p-3 text-lime font-bold border-2 border-solid border-lime" style={{borderRadius: "15px", backdropFilter: "blur(30px)", textShadow: "2px 2px 2px darkgreen"}} onClick={Logout}>Cerrar sesión</button>
  );
}