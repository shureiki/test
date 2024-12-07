'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Gabi() {
  const [secondes, setSecondes] = useState(0);
  const [jours, setJours] = useState(0);
  const [annees, setAnnees] = useState(0);
  const [joursRestants, setJoursRestants] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const naissance = new Date('2010-01-14T00:00:00');
      const totalSecondes = Math.floor((now - naissance) / 1000);
      const totalJours = Math.floor(totalSecondes / 86400);

      const totalAnnees = Math.floor(totalJours / 365);
      const joursDepuisDernierAnniv = totalJours % 365;

      const prochainAnniv = new Date();
      prochainAnniv.setFullYear(now.getFullYear());
      prochainAnniv.setMonth(0, 14);

      if (now > prochainAnniv) {
        prochainAnniv.setFullYear(now.getFullYear() + 1);
      }

      const joursRestantsCalcul = Math.ceil((prochainAnniv - now) / 86400000);

      setSecondes(totalSecondes);
      setJours(totalJours);
      setAnnees(totalAnnees);
      setJoursRestants(joursRestantsCalcul);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className='flex items-center justify-center'>
      <div className='flex flex-col p-2 bg-green-200/20 text-green-200/80 rounded-lg gap-2 m-8'>
	  	{
			secondes != 0
				? (
					<>
						<div>{secondes.toLocaleString('fr')} secondes se sont écoulées depuis la naissance de Gabibibi</div>
						<div>{annees} années / {jours} jours se sont écoulés depuis la naissance</div>
						<div>Il reste {joursRestants} jours avant son prochain anniversaire</div>

					</>
				)
				: <p>Chargement..</p>
			}

			<Link href='/' className='w-fit bg-green-300/20 text-green-300/80 px-2 py-1 rounded-md'>Retourner au menu</Link>
      </div>
    </main>
  );
}
