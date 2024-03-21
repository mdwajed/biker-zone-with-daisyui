import PropTypes from "prop-types";
import Features from "../Features/Features";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-700 p-6 rounded-2xl text-center flex flex-col justify-center
    space-y-4">
      <span className="text-5xl">{price}</span>
      <h3 className="text-4xl">{name}</h3>
      <div className="flex-grow">
        {" "}
        {features.map((feature, index) => (
          <Features key={index} feature={feature}></Features>
        ))}
      </div>
      <button className="flex justify-center text-2xl bg-green-600  p-2 rounded-xl hover:bg-black">  Buy Now</button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
