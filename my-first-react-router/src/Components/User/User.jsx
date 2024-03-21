import PropTypes from "prop-types";
const User = ({ user }) => {
  const {id, name, email, address, phone, username } = user;
  const userStyle = {
    border: "2px solid red",
    padding: "5px",
    borderRadius: "20px",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{username}</p>
      <h3>Address : {address.street}</h3>
      <h3>City : {address.city}</h3>
      <h3>Zipcode : {address.zipcode}</h3>
      <button to={`/user/${id}`}>Show Details</button>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
    }),
    phone: PropTypes.string,
    username: PropTypes.string,
    id: PropTypes.string,
    
  }),
};
export default User;
