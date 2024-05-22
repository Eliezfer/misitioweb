import React, {useEffect,useState} from "react";
import Repo from "./repo";

export default () => {

    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount ] = useState([]);

    useEffect(()=> {

        const data = sessionStorage.getItem("repos");
 
        if (data) {
            let myRepos = JSON.parse(data);
            setReposCount(myRepos.length);

            myRepos = myRepos.slice(0,5);
            return setRepos(myRepos);
        }


        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/Eliezfer/repos");
            let myRepos = await response.json();
            setReposCount(myRepos.length);
            
            sessionStorage.setItem("repos", JSON.stringify(myRepos));
            myRepos = myRepos.slice(0,5);
            setRepos(myRepos);
        }
        
        fetchRepos();
        
    }, []);



    return(
        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold">My Open Source Work</h2>
                <p>Collaborations and contributions</p>
            </header>
            <ul className="repos-list">
                {
                    repos.map((repo)=>{
                    return <Repo repo={repo} key={repo.id}/>
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/Eliezfer" className="bg-color-primary hover:bg-blue-700 text-white font-bold py-2 my-6 px-4 rounded inline-flex items-center" target="_blank" rel="noopener noreferrer">
                    see more on github ({reposCount})
                </a>
            </div>
        </div>
    )
}


