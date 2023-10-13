import { FormEvent } from "react";
import { usePostReviewMutation } from "../redux/api/bookSlice";
import { IBookProps, IReview } from "../types/globalTypes";
import Review from "./ui/Review";
import UserCredentialFromLocalStorage from "../utility/UserCredential";
import toast from "react-hot-toast";

const BookReview = ({ book }: IBookProps) => {
  const [setReviewData, { isError, error, isSuccess, data }] =
    usePostReviewMutation();
  const UserCredential = UserCredentialFromLocalStorage();
  const handlePostReview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const comment = event.target.comment.value;

    const userCommentWithInfo = {
      name: UserCredential?.name,
      photoUrl: UserCredential?.photoUrl,
      comment: comment,
    };
    const opions = {
      id: book?._id,
      data: userCommentWithInfo,
    };

    setReviewData(opions);
  };
  if (isError && error) {
    toast.error("Something went wrong");
  }
  return (
    <div>
      <h3 className="border-l-4 border-amber-500 text-2xl px-3 text-blue-900 font-semibold mt-3 mb-5">
        {book?.reviews?.length} COMMENTS
      </h3>
      {book?.reviews.map((review: IReview) => (
        <Review review={review} />
      ))}
      <form onSubmit={handlePostReview} className="mt-32">
        <textarea
          name="comment"
          placeholder="Enter Your Opinion in this book"
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
