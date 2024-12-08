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

const ProjectBox = ({ name, description, language, url }) => {
    return (
        <div className='bg-white/20 p-0.5 cp-t-cut'>
            <div
                className="relative flex flex-col gap-1 bg-neutral-900 cp-t-cut cpt-cut-2 p-5 text-white max-w-screen-sm"
            >
                <h2 className="text-primary text-xl font-bold font-bigShouldersDisplay uppercase tracking-wider">
                    {name}
                </h2>
                {description &&
                    (<p className="text-neutral-500">
                        {description}
                    </p>)
                }
                {language && (
                    <p className="text-yellow-500 text-sm">Langage : {language}</p>
                )}
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline block"
                >
                    Voir le projet
                </a>
            </div>
        </div>
    );
};

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
            <div className='flex flex-col gap-6 p-4'>
                {projects.map((project) => (
                    <ProjectBox
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        language={project.language}
                        url={project.html_url}
                    />
                ))}
            </div>
        </main>
    );
};

export default Projects;
