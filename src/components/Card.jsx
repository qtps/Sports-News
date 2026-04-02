const Card = ({ title, image }) => {
  return (
    <div className="w-67.5 bg-white  rounded-lg overflow-hidden">
      {/* Content */}
      <div className="mb-6 flex justify-center">
        <button className="text-4xl font-sequel bg-[#EBEEF3] rounded-md px-14 py-5 uppercase transition duration-300 hover:bg-gray-500 hover:text-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-300">
          {title}
        </button>
      </div>

      {/* Image section */}
      <div className="h-72 bg-gray-100 flex items-center justify-between">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover rounded-lg 
           transition duration-300 
           hover:shadow-[0_0_20px_rgba(0,255,255,0.9)] hover:scale-105 "
          />
        ) : (
          <span className="text-gray-400">Image Placeholder</span>
        )}
      </div>
    </div>
  );
};

export default Card;
