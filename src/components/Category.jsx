import Card from "./Card";
import Card2 from "./Card2";
import football from "../assets/football.jpg";
import basketball from "../assets/buscket_ball.png";
import tenis from "../assets/tenis.png";
import car from "../assets/sports_car.png";

const Category = () => {
  return (
    <div
      className="mt-10 grid gap-5 py-5 
                    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                    justify-items-center "
    >
      <Card title="Football" image={football} />
      <Card2 title="Basket ball" image={basketball} />
      <Card title="Table Tennis" image={tenis} />
      <Card2 title="Sports Car" image={car} />
    </div>
  );
};
export default Category;
