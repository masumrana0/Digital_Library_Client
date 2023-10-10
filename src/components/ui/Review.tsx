import { useGetOneUserByEmailQuery } from "../../redux/api/apiSlice";
import { IReviewProps } from "../../types/globalTypes";
import { FaUserAlt } from "react-icons/fa";

const Review = ({ review }: IReviewProps) => {
  const { data: user, isLoading } = useGetOneUserByEmailQuery(review.email);
  let userName: string | null = null;
  if (isLoading) {
    userName = "loading ...";
  } else {
    userName = user?.data?.name.firstName;
  }

  return (
    <div>
      <div className="flex justify-center items-center gap-3 w-full h-auto border-b-2 border-gray-300 mb-5">
        {user?.data?.photoUrl ? (
          <img
            className="w-16 h-20 rounded-lg p-2"
            src={user?.data?.photoUrl}
            alt=""
          />
        ) : (
          <FaUserAlt className="text-3xl" />
        )}

        <div>
          <h3 className="font-bold text-md">{userName}</h3>
          <p>{review?.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
