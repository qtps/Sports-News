import PropTypes from "prop-types";

const RecentNewsCard = ({ title, image, description, date }) => {
  return (
    <div className="flex gap-4 items-center p-2.5 mx-w-62.5  ">
      <img src={image} alt={title} className="card-image mx-w-17.5 " />
      <div className="flex items-start flex-col gap-2 px-5 sm:px-5 md:px-5 lg:px-0">
        <p className="text-stone-500 text-xs font-normal font-dm">{date}</p>
        <h2 className="text-neutral-800 font-sequel text-sm sm:text-base md:text-smlg:text-sm xl:text-sm leading-tight">{title}</h2>
        <p className="text-stone-500 text-xs font-normal font-dm">{description}</p>
      </div>
    </div>
  );
};

RecentNewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default RecentNewsCard;
