import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/api/bookSlice";
import Spinner from "../components/ui/Spinner";
import BookCard from "../components/BookCard";
import { IBook } from "../types/globalTypes";
import React from "react";

const Home = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  return (
    <div>
      {/* Header */}
      <header
        className="bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url(https://i.ibb.co/KqqP6B3/banner.jpg)",
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
              src="https://i.ibb.co/6XZKTMV/femalewithbgremove.png"
              alt=" "
            />
          </div>
        </div>
      </header>

      <div className="bg-gray-200">
        <h2 className="py-10 text-5xl font-extrabold text-center mb-5 text-violet-900">
          Recommended For You
        </h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className=" ">
            <div className="flex justify-center py-10 ">
              {isLoading ? (
                <Spinner />
              ) : (
                <div className=" grid grid-cols-4 gap-16   ">
                  {data?.data?.map((book: IBook) => (
                    <BookCard key={book?._id} book={book} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

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
