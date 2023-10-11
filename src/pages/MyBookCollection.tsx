const MyBookCollection = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <h2 className="text-center text-3xl font-extrabold py-6 text-violet-900">
        Your Book Collection
      </h2>
      <div className="flex justify-center">
        <div className="container grid grid-cols-4">
          {/* Book Card 1 */}
          <div className="w-72 h-96 border-2 border-gray-500 rounded p-4">
            <img
              className="container h-1/2 mb-2"
              src="../../assets/6936a901231d2e36c6b51a76bccf4164.jpg"
              alt=""
            />
            <h1 className="font-extrabold text-xl text-gray-600">Price: 29$</h1>
            <h2 className="font-extrabold">Atomic Habits</h2>
            <h3 className="font-semibold">Genre: Self-help</h3>
            <h3 className="font-semibold">Author: Aevey</h3>
            <h3 className="font-semibold mb-2">Publication Year: 2023</h3>
            <button className="w-full bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-md">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookCollection;
