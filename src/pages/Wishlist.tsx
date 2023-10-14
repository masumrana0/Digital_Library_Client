import { useState } from "react";
import WishlistTable from "../components/WishlistTable";
import { useAppSelector } from "../redux/hook";
import { IBook } from "../types/globalTypes";
import ReadingListTable from "../components/ReadinglistTable";
import FinishedlistTable from "../components/FinishedlistTable";

const Wishlist = () => {
  const { Wislistbooks, ReadingListBooks, FinishedListBooks } = useAppSelector(
    (state) => state.wislist
  );
  const [isOpenWislist, setOpenWislist] = useState(true);
  const [isOpenRedingList, setOpenRedingList] = useState(false);
  const [isOpenFinishedList, setOpenFinishedList] = useState(false);

  const handleWishlist = () => {
    setOpenWislist(true);
    setOpenRedingList(false);
    setOpenFinishedList(false);
  };
  const handleReadinglist = () => {
    setOpenRedingList(true);
    setOpenWislist(false);
    setOpenFinishedList(false);
  };
  const handleFinishedlist = () => {
    setOpenFinishedList(true);
    setOpenWislist(false);
    setOpenRedingList(false);
  };

  return (
    <div className="min-h-screen  bg-blue-200 ">
      <div className="flex  justify-center items-center gap-10 bg-amber-500 mb-10">
        <h2
          onClick={handleWishlist}
          className="text-center font-bold text-2xl text-white  cursor-pointer  "
        >
          Wishlist
        </h2>
        <h2
          onClick={handleReadinglist}
          className="text-center font-bold text-2xl text-white cursor-pointer "
        >
          Readinglist
        </h2>
        <h2
          onClick={handleFinishedlist}
          className="text-center font-bold text-2xl text-white cursor-pointer "
        >
          Finishedlist
        </h2>
      </div>
      {isOpenWislist && (
        <div className="flex justify-center items-center">
          <div className="w-1/2 ">
            <h2 className="text-center font-bold text-3xl">Wishlist</h2>
            {Wislistbooks?.map((book: IBook) => (
              <WishlistTable book={book} />
            ))}
          </div>
        </div>
      )}

      {isOpenRedingList && (
        <div className="flex justify-center items-center">
          <div className="w-1/2 ">
            <h2 className="text-center font-bold text-3xl">ReadingList</h2>
            {ReadingListBooks?.map((book: IBook) => (
              <ReadingListTable book={book} />
            ))}
          </div>
        </div>
      )}

      {isOpenFinishedList && (
        <div className="flex justify-center items-center">
          <div className="w-1/2 ">
            <h2 className="text-center font-bold text-3xl">Finished list</h2>
            {FinishedListBooks?.map((book: IBook) => (
              <FinishedlistTable book={book} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
