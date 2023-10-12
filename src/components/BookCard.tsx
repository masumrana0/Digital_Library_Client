import { Link } from "react-router-dom";
import { IBookProps } from "../types/globalTypes";

const BookCard = ({ book }: IBookProps) => {
  return (
    <div
      style={{ height: "415px" }}
      className="w-80 h-96  border-2 border-gray-300 rounded p-4 shadow-lg"
    >
      <img className="container h-1/2 mb-2" src={book.bookPhotoUrl} alt="" />
      <h1 className="font-extrabold text-xl text-gray-600">Price: 29$</h1>
      <h2 className="font-extrabold">{book.title}</h2>
      <h3 className="font-semibold">Genre: {book.genre}</h3>
      <h3 className="font-semibold">Author: {book.author}</h3>
      <h3 className="font-semibold mb-2">Publication Year: 2023</h3>
      <Link to={`/bookdetails/${book?._id}`}>
        <button className="w-full bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-md">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default BookCard;
