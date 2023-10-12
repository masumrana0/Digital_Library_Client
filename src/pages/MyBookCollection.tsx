import BookCard from "../components/BookCard";
import Spinner from "../components/ui/Spinner";
import { useGetMyBookQuery } from "../redux/api/bookSlice";
import { IBook } from "../types/globalTypes";

const MyBookCollection = () => {
  const accessToken = localStorage.getItem("accessToken");

  const { data, isLoading } = useGetMyBookQuery(accessToken);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      <h2 className="text-center text-4xl font-extrabold py-6 text-violet-900">
        Your Book Collection
      </h2>
      <div className="flex justify-center py-20">
        <div className=" grid grid-cols-5  gap-20">
          {/* Book Card 1 */}
          {data?.data?.map((book: IBook) => (
            <BookCard key={book?._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookCollection;
