import { FormEvent, useEffect, useState } from "react";
import { IBook } from "../types/globalTypes";
import { useNavigate, useParams } from "react-router-dom";
import {
  useBookUpdateMutation,
  useGetOneBookQuery,
} from "../redux/api/bookSlice";
import toast from "react-hot-toast";

const UpdateBook = () => {
  const navigate = useNavigate();
  const bookId = useParams();
  const { data } = useGetOneBookQuery(bookId.id);
  const [
    setUpdatedData,
    { isError, error, isSuccess, isLoading, data: UpdatedBook },
  ] = useBookUpdateMutation();

  const book: IBook = data?.data;

  const handlePostBook = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const title = form.title.value;
    const author = form.author.value;
    const bookurl = form.bookurl.value;
    const summary = form.summary.value;
    const publication_date = form.publication_date.value;
    const price = form.price.value;

    const bookInfo = {
      title: title,
      author: author,

      price: price,
      bookPhotoUrl: bookurl,
      publicationData: publication_date,
      bookSummary: summary,
    };
    const options = {
      id: book?._id,
      updatedData: bookInfo,
    };
    setUpdatedData(options);
    if (data.statusCode === 200) {
      toast.success(" Book is updated successfull");
      navigate(-1);
    }
  };

  if (isError && error) {
    toast.error("Somthing Went wrong");
  }
  console.log(UpdatedBook);
  return (
    <div className="flex justify-center mt-5 bg-gray-200">
      <div className="w-1/2 p-32 bg-violet-200">
        <h2 className="text-center text-3xl text-violet font-bold mb-10">
          Update Your Book
        </h2>
        <form onSubmit={handlePostBook} method="post" className="flex flex-col">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
            required
            defaultValue={book?.title}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
            required
            defaultValue={book?.author}
          />

          <input
            type="text"
            name="bookurl"
            placeholder="Book photo Url"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
            required
            defaultValue={book?.bookPhotoUrl}
          />
          <input
            type="number"
            name="price"
            placeholder="Book Price"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
            required
            defaultValue={book?.price}
          />
          <textarea
            name="summary"
            placeholder="Book Summary"
            className="w-full h-48 border border-gray-300 rounded-md py-2 px-3 mb-5"
            required
            defaultValue={book?.bookSummary}
          ></textarea>
          <input
            type="text"
            name="publication_date"
            placeholder="Publication Date"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
            required
            defaultValue={book?.publicationData}
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

export default UpdateBook;
