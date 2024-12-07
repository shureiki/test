'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Gabi() {
	const [secondes, setSecondes] = useState(Math.floor((new Date() - new Date('2010-01-14T00:00:00')) / 1000));

	useEffect(() => {
	  const interval = setInterval(() => {
		setSecondes(Math.floor((new Date() - new Date('2010-01-14T00:00:00')) / 1000));
	  }, 1000);
  
	  return () => clearInterval(interval);
	}, []);

  	return (
    	<main className='flex items-center justify-center'>
			<div className='flex flex-col p-2 bg-green-200/20 text-green-200/80 rounded-lg gap-2'>
      			<div>{secondes.toLocaleString('fr')} secondes se sont écoulés depuis la naissance de Gabibibi</div>
				<Link href='/' className='w-fit bg-green-300/20 text-green-300/80 px-2 py-1 rounded-md'>Retourner au menu</Link>
			</div>
    	</main>
  	);
}
