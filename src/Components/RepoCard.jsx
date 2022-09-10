//To show the current repositeries of the user

const RepoCard = ({ liveDemo, name, description, topics, htmlUrl, language, }) => {

  return (
    <>
      {/* <!-- Card to display repos --> */}
      <div className={`transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 ${language === "JavaScript" ? "bg-[#A084CA]" : language === "C++" ? "bg-[#6ABAB6]": language === "SCSS" ? "bg-purple-600" : language === "HTML" ? "bg-[#EE534F]" : language === "CSS" ? "bg-pink-500" : language === "Vue" ? "bg-green-500" : language === "Ruby" ? "bg-[#EBA83A]" : language === "Python" ? "bg-yellow-400" : language === "Java" ? "bg-[#88B2CC]" : language === "Kotlin" ? "bg-[#b36d98]" : language === "PHP" ? "bg-[#C3C3D5]"  : language === "Dart" ? "bg-[#D9EF82]" : language === "Shell" ? "bg-[#D9CB50]" : "bg-blue-500"} text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0`}>

        {/* <!-- Dot Follwing the Left Vertical Line --> */}
        <div className={`w-5 h-5 bg-white absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0`} />
        {/* <!-- Line that connecting the box with the vertical line --> */}
        <div className={`w-10 h-1 bg-white  absolute -left-10 z-0`} />
        {/* <!-- Content that showing in the box --> */}
        <div className="flex-auto">
          <h1 className="text-2xl font-bold">
            {name}
            <span className="badge text-blue-500 bg-white border-2 border-blue-500 ml-2 shadow-lg">
              {language ? language : "Readme"}
            </span>
          </h1>
          <h3 className="my-2">{description}</h3>
          <h4>
            {topics.map((topic) => (
              <span key={topic} className="mr-2 badge-sm badge p-2">
                {topic}
              </span>
            ))}
          </h4>
        </div>

        {/* <a href={`${htmlUrl}`} className="text-center text-black border-2 border-black  capitalize hover:text-white btn-md btn-ghost btn"> */}
        <a href={`${htmlUrl}`} className="bg-transparent text-center text-white border-2 border-white capitalize hover:text-black hover:bg-white hover:border-white btn-md btn">
          View Repo
        </a>
        {liveDemo && <a href={`${liveDemo}`} className="bg-transparent text-center text-white border-2 border-white capitalize hover:text-black hover:bg-white hover:border-white btn-md btn md:ml-3">
          Live Demo
        </a>}
      </div>
    </>
  );
};

export default RepoCard;
