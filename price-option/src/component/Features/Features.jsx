import PropTypes from "prop-types";
import { VscCheck } from "react-icons/vsc";
const Features = ({ feature }) => {
  return (
    <div className="text-2xl">
      <h3 className="flex">
        <VscCheck className="mr-4"></VscCheck>
        {feature}
      </h3>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.string,
};

export default Features;
