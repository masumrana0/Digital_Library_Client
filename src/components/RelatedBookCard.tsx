const RelatedBookCard = () => {
  return (
    <div className="  rounded  w-72 h-56 p-2 flex justify-center items-center  gap-3 ">
      <div className="w-1/2">
        <img
          className="w-full h-35 rounded-lg "
          src="../../assets/book2.png"
          alt=""
        />
      </div>
      <div className="w-1/2">
        <h3 className="font-bold text-blue-800">Terrible Mandness</h3>
        <p className="font-semibold text-amber-600">Genre: comedy</p>
        <p className="font-extrabold text-2xl text-amber-600 mb-2">$45.4</p>
        <button className="w-full transition-colors hover:bg-violet-500 hover:text-white focus:bg-violet-800 text-black font-bold py-1 px-2 rounded-md  outline outline-violet-500 ">
          Add to wishlist
        </button>
      </div>
    </div>
  );
};

export default RelatedBookCard;
