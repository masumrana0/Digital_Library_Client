import { useDispatch } from "react-redux";
import { IBookProps } from "../types/globalTypes";
import {
  addToReadingList,
  removeFromWishlist,
} from "../redux/features/wishlistSlice";

const WishlistTable = ({ book }: IBookProps) => {
  const dispatch = useDispatch();
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 border-2  ">
        <tbody className="bg-white divide-y  divide-gray-200 ">
          <tr className="flex items-center justify-between h-44">
            <td className="flex items-center  w-full h-full px-6 py-4 whitespace-nowrap">
              {" "}
              <div className="  rounded  w-72 h-1/2 p-2 flex justify-center items-center  gap-3 ">
                <div className="w-1/2">
                  <img
                    className="h-28 w-28 rounded-lg"
                    src={book?.bookPhotoUrl}
                    alt=""
                  />
                </div>
                <div className="w-1/2">
                  <h3 className="font-bold text-blue-800">{book?.title}</h3>
                  <p className="font-semibold text-amber-600">
                    Genre: {book?.genre}
                  </p>
                  <p className="font-semibold text-amber-600">
                    Author: {book?.author}
                  </p>
                </div>
              </div>{" "}
            </td>
            <td className="px-6 py-4 whitespace-nowrap flex gap-10">
              <button
                onClick={() => dispatch(addToReadingList(book))}
                className=" transition-colors hover:bg-violet-500 hover:text-white focus:bg-violet-800 text-black font-bold py-1 px-2 rounded-md  outline outline-violet-500 "
              >
                add To Readinglist
              </button>
              <button
                onClick={() => dispatch(removeFromWishlist(book))}
                className="  transition-colors hover:bg-red-500 hover:text-white focus:bg-red-800 text-black font-bold py-1 px-2 rounded-md  outline outline-red-500 "
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WishlistTable;
