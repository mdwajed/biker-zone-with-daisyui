const Watch = ({ Watche }) => {
  const { name, price } = Watche;
  return (
    <div>
      <h2>Watches: {name}</h2>
      <p>Price:{price}</p>
    </div>
  );
};

export default Watch;
