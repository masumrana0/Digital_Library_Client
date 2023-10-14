import { FormEvent } from "react";
import { usePostBookMutation } from "../redux/api/bookSlice";
import UserCredentialFromLocalStorage from "../utility/UserCredential";
import toast from "react-hot-toast";

const AddBook = () => {
  const userCredential = UserCredentialFromLocalStorage();
  const [setBookInfo, { isError, error, data }] = usePostBookMutation();

  const handlePostBook = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const bookurl = form.bookurl.value;
    const summary = form.summary.value;
    const publication_date = form.publication_date.value;
    const price = form.price.value;

    const bookInfo = {
      title: title,
      author: author,
      genre: genre,
      price: price,
      bookPhotoUrl: bookurl,
      publicationData: publication_date,
      bookSummary: summary,
      publisher: `${userCredential?._id}`,
    };

    setBookInfo(bookInfo);

    form.reset();
  };

  if (isError && error) {
    toast.error("Somthing Went wrong");
    console.log(error);
  }

  if (data?.statusCode === 200) {
    toast.success("Your Book is successfully added");
  }

  return (
    <div className="flex justify-center mt-5 bg-gray-200">
      <div className="w-1/2 p-32 bg-violet-200">
        <h2 className="text-center text-3xl text-violet font-bold mb-10">
          Add New Book
        </h2>
        <form onSubmit={handlePostBook} method="post" className="flex flex-col">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
            required
          />

          <select
            name="genre"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
          >
            <option value="comedy">Comedy</option>
            <option value="fiction">Fiction</option>
            <option value="fiction">Poetry</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="romance">Romance</option>
            <option value="mystery">Mystery</option>
            <option value="thriller">Thriller</option>
            <option value="horror">Horror</option>
            <option value="science-fiction">Science Fiction</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical-fiction">Historical fiction</option>
            <option value="young-adult">Young adult</option>
          </select>
          <input
            type="text"
            name="bookurl"
            placeholder="Book photo Url"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Book Price"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
            required
          />
          <textarea
            name="summary"
            placeholder="Book Summary"
            className="w-full h-48 border border-gray-300 rounded-md py-2 px-3 mb-5"
            required
          ></textarea>
          <input
            type="text"
            name="publication_date"
            placeholder="Publication Date"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
