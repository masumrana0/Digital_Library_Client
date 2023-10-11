const AddBook = () => {
  return (
    <div className="flex justify-center mt-5 bg-gray-200">
      <div className="w-1/2 p-32 bg-violet-200">
        <h2 className="text-center text-3xl text-violet font-bold mb-10">
          Add New Book
        </h2>
        <form action=" " method="post" className="flex flex-col">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
          />

          <select
            name="genre"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
          >
            <option value="comedy">Comedy</option>
            <option value="fiction">Fiction</option>
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
          />
          <textarea
            name="summary"
            placeholder="Book Summary"
            className="w-full h-48 border border-gray-300 rounded-md py-2 px-3 mb-5"
          ></textarea>
          <input
            type="date"
            name="publication_date"
            placeholder="Publication Date"
            className="w-full mb-4 border border-gray-300 rounded-md py-2 px-3"
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
