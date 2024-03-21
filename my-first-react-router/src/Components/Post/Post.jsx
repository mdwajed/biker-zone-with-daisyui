import { Link, useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();
  const postStyle = {
    border: "2px solid red",
    padding: "5px",
    borderRadius: "20px",
    marginBottom: "15px",
  };
  const handleSearch = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={postStyle}>
      <h2>Id of Post:{id}</h2>
      <h3>{title}</h3>
      <Link to={`/post/${id}`}>Post Details</Link>
      <button onClick={handleSearch}>See Details</button>
    </div>
  );
};

export default Post;
