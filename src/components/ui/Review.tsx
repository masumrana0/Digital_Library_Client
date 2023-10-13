import { useGetOneUserByEmailQuery } from "../../redux/api/userSlice";
import { IReviewProps } from "../../types/globalTypes";
import { FaUserAlt } from "react-icons/fa";

const Review = ({ review }: IReviewProps) => {
  let userName: string | null = null;

  return (
    <div>
      <div className=" flex items-center gap-3 w-full h-auto border-b-2 border-gray-300 mb-5">
        {review?.photoUrl ? (
          <img
            className="w-16 h-18 rounded-2xl p-2"
            src={review?.photoUrl}
            alt=""
          />
        ) : (
          <FaUserAlt className="text-3xl" />
        )}

        <div>
          <h3 className="font-bold text-md">
            {review?.name?.firstName + review?.name?.lastName}
          </h3>
          <p className="text-gray-700">{review?.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
