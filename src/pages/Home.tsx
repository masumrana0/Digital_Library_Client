import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header
        className="bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('../../src/assets/banner.jpg')",
          height: "800px",
          width: "100%",
        }}
      >
        <div className="flex flex-row-reverse justify-center items-center p-20">
          <div className="w-1/2">
            <div className="flex flex-col gap-4">
              <h3 className="text-5xl text-white font-extrabold">B E S T</h3>
              <h3 className="text-5xl text-white font-extrabold">
                {" "}
                M A N G E M E N T
              </h3>
            </div>

            <h3 className="text-violet-500 font-bold text-2xl mt-3">
              Think and Grow Rich
            </h3>
            <p className="text-violet-500 font-bold text-2xl ">
              Napoleon Hill Business Strategy
            </p>
            <p className="text-white text-2xl font-semibold my-5 border-l-4 pl-4 border-indigo-500">
              Business strategy is a comprehensive plan of action that an
              organization formulates to achieve specific goals and objectives.
              It encompasses a set of decisions and actions that guide the
              organization in allocating its resources effectively, optimizing
              its operations .
            </p>
            <button className="bg-violet-500 hover-bg-violet-700 text-white font-bold py-2 px-4 rounded-md">
              Read More
            </button>
          </div>
          <div className="w-1/2">
            <img
              src="../../src/assets/femalewithbgremove.png"
              alt=""
              srcSet=""
            />
          </div>
        </div>
      </header>

      <div className="bg-gray-200">
        <h2 className="py-10 text-3xl font-extrabold text-center mb-5 text-violet-900">
          Recommended For You
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-32">
            <div className="w-72 h-96 border-2  border-gray-300 rounded p-4">
              <img
                className="container h-1/2 mb-2"
                src="../../assets/6936a901231d2e36c6b51a76bccf4164.jpg"
                alt=""
              />
              <h1 className="font-extrabold text-xl text-gray-600">
                Price: 29$
              </h1>
              <h2 className="font-extrabold">Atomic Habits</h2>
              <h3 className="font-semibold">Genre: Self-help</h3>
              <h3 className="font-semibold">Author: Aevey</h3>
              <h3 className="font-semibold mb-2">Publication Year: 2023</h3>
              <button className="w-full bg-violet-500 hover-bg-violet-700 text-white font-bold py-2 px-4 rounded-md">
                Read More
              </button>
            </div>
            {/* Repeat the above block for other books */}
          </div>
        </div>
        <div className="flex justify-center items-center py-10">
          <Link to="/addbook">
            <button className="w-48 bg-violet-500 hover-bg-violet-700 text-white font-bold py-2 px-4 rounded-md">
              Add new Book
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
