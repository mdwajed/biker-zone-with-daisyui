import "./Bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price, ratings } = bottle;
  return (
    <div className="bottle">
      <h3>Bottle:{name}</h3>
      <img src={img} alt="" />
      <h3>Price:${price}</h3>
      <h3>Rating:{ratings}</h3>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
