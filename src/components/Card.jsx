const Card = ({ title, image }) => {
  return (
    <div className="w-67.5 bg-white  rounded-lg overflow-hidden">
      {/* Content */}
      <div className="mb-6 flex justify-center">
        <button className="text-4xl font-sequel bg-[#EBEEF3] rounded-md px-14 py-5  uppercase">
          {title}
        </button>
      </div>

      {/* Image section */}
      <div className="h-72 bg-gray-100 flex items-center justify-between">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover rounded-lg"
          />
        ) : (
          <span className="text-gray-400">Image Placeholder</span>
        )}
      </div>
    </div>
  );
};

export default Card;
