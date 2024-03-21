import "./Bottles.css";
import { useState, useEffect } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart,setCart]=useState([]);
  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  const handleAddToCart = (bottle) => {
   setCart([...cart,bottle])
  };
  return (
    <div>
      <h3>Bottles Available:{bottles.length}</h3>
      <h4>Bottle Added:{cart.length}</h4>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
           key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
            ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
