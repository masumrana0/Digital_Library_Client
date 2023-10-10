import { IBookProps, IReview } from "../types/globalTypes";
import Review from "./ui/Review";

const BookReview = ({ book }: IBookProps) => {
  return (
    <div>
      <h3 className="border-l-4 border-amber-500 text-2xl px-3 text-blue-900 font-semibold mt-3 mb-5">
        {book?.reviews?.length} COMMENTS
      </h3>
      {book?.reviews.map((review: IReview) => (
        <Review review={review} />
      ))}
      <form className="mt-32">
        <textarea
          name="summary"
          placeholder="Book Summary"
          className="w-full h-48 border border-gray-300 rounded-md py-2 px-3 mb-5"
        ></textarea>

        <button
          type="submit"
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default BookReview;
