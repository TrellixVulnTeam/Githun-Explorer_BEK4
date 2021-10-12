import { RepositoryItem } from "./RepositoryItem";
import '../Style/repositories.scss';
import { useEffect, useState } from "react";


const repository ={
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {

    interface Repository{
        name: string;
        description: string;
        html_url:string;
    }

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);


    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository =>{
                    return <RepositoryItem key={repository.name} repository ={repository}/>
                })}
            </ul>
        </section>
    );
}