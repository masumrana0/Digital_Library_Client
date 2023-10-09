const BookDetails = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-4">
            <img className="" src="../../assets/book2.png" alt="" />
          </div>
          <div className="col-span-8">
            <h3 className="text-4xl text-violet-800 font-bold mb-5">
              Think and Grow Rich
            </h3>
            {/* about writer and publisher */}
            <div className="flex justify-between items-ceter mb-5">
              <div>
                <p className="text-gray-400">Written by</p>
                <h3 className="font-bold text-xl">Kevin Smiley</h3>
              </div>
              <div>
                <p className="text-gray-400">Publisher</p>
                <h3 className="font-bold text-xl">Masum Rana</h3>
              </div>
              <div>
                <p className="text-gray-400">Year</p>
                <h3 className="font-bold text-xl">2019</h3>
              </div>
            </div>

            {/* summary */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold  mb-1">Book Summary</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis impedit beatae itaque architecto dolorem quam
                asperiores consequatur maiores deserunt. Voluptas ipsum porro
                earum quaerat veniam doloremque, in facere eveniet perspiciatis
                odit, labore incidunt animi magnam sed ipsa inventore minus.
                Quibusdam consequuntur dolore iure? Facilis iste culpa vel neque
                commodi in tempore esse, quia officiis dolorem assumenda nihil
                excepturi porro aspernatur voluptates, soluta non corrupti
                exercitationem voluptatum a quas iusto ipsam delectus. Ea animi
                unde mollitia possimus qui, doloribus laudantium dicta ad
                quisquam enim atque quos fugit velit libero illo commodi alias
                facilis est laborum! Vitae placeat eius modi sapiente ad id, nam
                sunt accusamus pariatur corrupti, cupiditate reprehenderit
                numquam consequatur enim perferendis eaque tempore
                necessitatibus totam fuga, aperiam ut quidem magnam. Minima
                natus in, cupiditate nemo obcaecati minus vel, possimus dolorem
                laudantium a animi aliquid dolore iure perspiciatis quidem
                ratione? Expedita dignissimos quae inventore officiis vero,
                mollitia, incidunt recusandae dolor excepturi suscipit error
                commodi repellendus pariatur tempora velit amet molestiae quod
                enim atque esse accusamus dolorem, sapiente voluptatum. Corrupti
                necessitatibus voluptas, tempora laborum reprehenderit
                voluptatum et itaque, ea, aliquam delectus aliquid minus fugit
                doloremque totam? Dolore non quidem rerum minus alias, expedita
                sunt, temporibus sit, illum necessitatibus beatae voluptas
                reprehenderit!
              </p>
            </div>

            {/* price and wishlist */}
            <div className="flex justify-around">
              <h2 className="text-3xl text-amber-600">$54.78</h2>
              <button className="w-48 transition-colors hover:bg-violet-500 hover:text-white focus:bg-violet-800 text-black font-bold py-2 px-4 rounded-md outline outline-violet-500">
                Add to wishlist
              </button>
            </div>
            <div className="mt-5 flex gap-5">
              <button className="w-25 transition-colors hover:bg-violet-500 hover:text-white focus:bg-violet-800 text-black font-bold py-2 px-4 rounded-md outline outline-violet-500">
                Delete Book
              </button>
              <button className="w-25 transition-colors hover:bg-violet-500 hover:text-white focus:bg-violet-800 text-black font-bold py-2 px-4 rounded-md outline outline-violet-500">
                Edit Book
              </button>
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-12 gap-10">
          {/* Book details and customer reviews */}
          <div className="col-span-8">
            <div className="flex gap-10 border-b border-gray-300 ">
              <h4 className="text-xl font-semibold text-blue-900">
                Details Book
              </h4>
              <h4 className="text-xl font-semibold text-blue-900">
                Customer Reviews
              </h4>
            </div>

            {/* book details */}
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
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sapiente culpa ea adipisci optio blanditiis iste unde
                      doloribus possimus quis nesciunt.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-3 w-full h-auto border-b-2 border-gray-300 mb-5">
                  <img
                    className="w-16 h-20 rounded-lg p-2"
                    src="../../assets/femalewithbgremove.png"
                    alt=""
                  />
                  <div>
                    <h3 className="font-bold text-md">Michal Poe</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sapiente culpa ea adipisci optio blanditiis iste unde
                      doloribus possimus quis nesciunt.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-3 w-full h-auto border-b-2 border-gray-300 mb-5">
                  <img
                    className="w-16 h-20 rounded-lg p-2"
                    src="../../assets/femalewithbgremove.png"
                    alt=""
                  />
                  <div>
                    <h3 className="font-bold text-md">Michal Poe</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sapiente culpa ea adipisci optio blanditiis iste unde
                      doloribus possimus quis nesciunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <h2 className="border-l-4 border-amber-500 px-3 text-xl font-bold mb-3 text-violet-800">
              RELATED BOOKS
            </h2>
            
            {/* related book card */}
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
                <p className="font-extrabold text-2xl text-amber-600 mb-2">
                  $45.4
                </p>
                <button className="w-full transition-colors hover:bg-violet-500 hover:text-white focus:bg-violet-800 text-black font-bold py-1 px-2 rounded-md  outline outline-violet-500 ">
                  Add to wishlist
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
