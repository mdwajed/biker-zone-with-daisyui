import "./Sunglass.css";
import Watch from "../Watch/Watch";
import {
  add,
  divideFirstAndSecond as dib,
  multiply,
} from "../../Utility/Calculate";
const Sunglass = () => {
  const first = 5;
  const second = 7;
  const sum = add(first, second);
  const mult = multiply(first, second);
  const divid = dib(first, second);
  return (
    <div>
      <Watch></Watch>
    </div>
  );
};

export default Sunglass;
