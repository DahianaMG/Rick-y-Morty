'use client';

import { FaUserAstronaut } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={async (event) => {
        event.preventDefault();

        // get form data
        const formData = new FormData(event.currentTarget);
        const user = formData.get('user')?.toString();
        const password = formData.get('password')?.toString();

        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user, password }),
        });

        const data = await response.json();

        if (response.ok === false) {
          setError(data.message);
        } else {
          router.push('/dashboard');
        }
      }}
    >
      <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
      <FaUserAstronaut className="text-white" style={{width:"24", height:"24"}}/>
      <input
        type="text"
        name="user"
        placeholder="Usuario"
        className="cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full"
      />
      </div>

      <div className="flex gap-2 border border-solid border-lime2 rounded-lg p-2">
      <FaLock className="text-white" style={{width:"24", height:"24"}}/>
      <input
        type="password"
        name="password"
        placeholder="Clave"
        className="cursor-diosa text-white bg-transparent placeholder:text-white focus:outline-none w-full"
      />
      </div>

      <button
        className="cursor-portal p-2 bg-secondary text-white rounded-lg shadow-lg"
        type="submit"
      >
        Ingresar
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};
