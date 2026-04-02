interface NewsCardProps {
  title: string;
  image: string;
  description: string;
  date: string;
}

const NewsCard = ({ title, image, description, date }: NewsCardProps) => {
  return (
    <div className="flex flex-col sm:flex-col lg:flex-row gap-4 items-center p-2 sm:p-4 md:p-6 lg:p-8 w-4/4 ">
      <img src={image} alt={title} className="card-image" />
      <div className="flex items-start flex-col gap-2 px-5 sm:px-5 md:px-5 lg:px-0">
        <p className="text-stone-500 text-xs font-normal font-dm">{date}</p>
        <h2 className="  text-neutral-800  font-sequel leading-4 text-sm">{title}</h2>
        <p className="text-stone-500 text-xs font-normal font-dm">{description}</p>
        <div className="w-72 h-0 outline-1 outline-offset-[-0.50px] outline-slate-300"></div>
      </div>
    </div>
  );
};

export default NewsCard;
