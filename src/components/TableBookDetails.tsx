import { IBookProps } from "../types/globalTypes";

const TableBookDetails = ({ book }: IBookProps) => {
  return (
    <div>
      <table className="table-fixed w-full border border-gray-300">
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300 text-md  text-violet-800">
              Book Title
            </td>
            <td className="px-4 py-2 border-t border-gray-300 text-md text-gray-500">
              {book?.title}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300 text-violet-800">
              Author
            </td>
            <td className="px-4 py-2 border-t border-gray-300 text-md text-gray-500">
              {book?.author}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300 text-md  text-violet-800">
              Date Published
            </td>
            <td className="px-4 py-2 border-t border-gray-300 text-md text-gray-500">
              {book?.publicationData}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300 text-md  text-violet-800">
              Publisher
            </td>
            <td className="px-4 py-2 border-t border-gray-300 text-md text-gray-500 ">
              {book.publisher?.name?.firstName}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300 text-md  text-violet-800">
              Genre
            </td>
            <td className="px-4 py-2 border-t border-gray-300 text-md text-gray-500">
              {book?.genre}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300 text-md  text-violet-800">
              Price
            </td>
            <td className="px-4 py-2 border-t border-gray-300 text-xl text-amber-500">
              ${book?.price}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableBookDetails;
