import { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import { BsGithub, BsLinkedin ,BsFillFileEarmarkCodeFill} from "react-icons/bs";
import {FaUserPlus,FaUsers} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import axios from "axios";
import Loader from "../Components/Loader";
import RepoCard from "../Components/RepoCard";
import ThemeContext from "../Context/ThemeContext";

const Profile = () => {
    const { theme } = useContext(ThemeContext);

    let { username } = useParams();

    const [data, setData] = useState([]);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        
        const apiCall = setTimeout(() => {
            axios.get(`https://api.github.com/users/${username}`).then((res) => setData(res.data));
            axios.get(`https://api.github.com/users/${username}/repos`).then((res) => setRepos(res.data));
        }, 0);
        return () => clearTimeout(apiCall);
    }, [username]);

    return (
        <>
            {/* Container */}
            <div className={`${theme === "dark" ? "bg-[#3D4451]" : "bg-[#181A1B]"} items-center flex flex-col mb-4 px-5 h-[500rem]`}>
                {/* Page title */}
                <h1 className="text-4xl font-bold my-5 text-center">
                    {username} GitHub Profile
                </h1>
                {/* Loader animation data control  */}
                {data.length !== 0 ? (
                    <>
                        {/* Profile Card */}
                        <div className="card lg:card-side card-bordered border-2 border-white flex md:px-5 py-5 w-full md:w-5/12">
                            {/* Card Avatar */}
                            <div className="avatar flex items-center justify-center ">
                                <div className="mb-8 rounded-full w-40 h-40 hover:scale-110 shadow-lg">
                                    <img alt="avatar" src={data.avatar_url} />
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="card-body flex items-center p-0 sm:p-5">
                                <h1 className="card-title text-3xl mb-4">{data.name ? data.name : username}</h1>
                                <div className="my-1 flex w-full justify-evenly flex-wrap">

                                    <div className="flex cursor-pointer mb-1">
                                    <BsFillFileEarmarkCodeFill className="text-orange-400 text-center mx-1 my-1"/>
                                        <a href={`https://github.com/${username}?tab=repositories`}>
                                            <b>Repos: {data.public_repos}</b>
                                        </a>
                                    </div>

                                    <div className=" flex cursor-pointer mb-1">
                                    <FaUsers className="text-orange-400 text-center mx-1 my-1 text-lg"/>
                                        <a href={`https://github.com/${username}?tab=followers`}>
                                            <b>Followers {data.followers}</b>
                                        </a>
                                    </div>
                                    

                                    <div className="cursor-pointer flex">
                                    <FaUserPlus className="text-orange-400 text-center mx-1 my-1 text-lg"/>
                                        <a href={`https://github.com/${username}?tab=following`}>
                                            <b>Following {data.following}</b>
                                        </a>
                                    </div>

                                </div>
                                <div className="location mt-3 flex items-center">
                                    {data.location && <GoLocation />}

                                    <p className="ml-2 text-xl">{data.location}</p>
                                </div>
                                <div className="blog flex items-center">
                                    {data.blog && <BsLinkedin className="hover:text-sky-600"/>}
                                    <a className="ml-2 " href={`${data.blog}`}>
                                        {data.blog}
                                    </a>
                                </div>
                                <div className="card-actions">
                                    <a href={`${data.html_url}`} className="btn btn-outline hover:scale-110 ">
                                        <BsGithub className="mr-2 text-lg" />
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Repositories  */}
                        <div className="w-12/12 h-2/5 mt-10 ">
                            <h1 className="text-3xl text-center font-bold ">Repositories ({data.public_repos})</h1>
                            <div className="border-l-2 mt-10">
                                {repos.map((repo, i) => (
                                    <RepoCard
                                        key={repo.id}
                                        liveDemo={repo.homepage}
                                        name={repo.name}
                                        description={repo.description}
                                        topics={repo.topics}
                                        htmlUrl={repo.html_url}
                                        language={repo.language}
                                    />
                                ))}
                            </div>
                            {data.public_repos > 30 && <a href={`${data.html_url}`} className="btn btn-outline w-full">View all repos</a>}
                        </div>
                    </>
                ) : (<Loader />)}
            </div>
        </>
    )
}

export default Profile

