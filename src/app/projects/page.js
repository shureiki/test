'use client';

import { useEffect, useState } from "react";

async function getPortfolioRepos(username) {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await res.json();

        if (res.status !== 200) return [];

        return repos.filter(repo => repo.topics.includes('to-portfolio'));
    } catch (error) {
        console.error('Erreur:', error);
        return [];
    }
}

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const repos = await getPortfolioRepos('reikuyao');
            setProjects(repos);
        };

        fetchRepos();
    }, []);

    return (
        <main className='flex sm:items-center sm:justify-center'>
            <div className='flex flex-col gap-4'>
                {projects.map((project) => (
                    <div key={project.id} className='p-4 bg-slate-800 rounded shadow'>
                        <h2 className='text-xl font-bold'>{project.name}</h2>
                        <p className='text-gray-600'>{project.description || "Pas de description disponible."}</p>
                        <a
                            href={project.html_url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-500 hover:underline mt-2'
                        >
                            Voir le projet
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Projects;
