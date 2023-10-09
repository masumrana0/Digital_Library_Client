const BookReview = () => {
  return (
    <div>
      <h3 className="border-l-4 border-amber-500 text-2xl px-3 text-blue-900 font-semibold mt-3 mb-5">
        4 COMMENTS
      </h3>
      <div>
        {/* comments */}
        <div className="flex justify-center items-center gap-3 w-full h-auto border-b-2 border-gray-300 mb-5">
          <img
            className="w-16 h-20 rounded-lg p-2"
            src="../../assets/femalewithbgremove.png"
            alt=""
          />
          <div>
            <h3 className="font-bold text-md">Michal Poe</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              culpa ea adipisci optio blanditiis iste unde doloribus possimus
              quis nesciunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookReview;
