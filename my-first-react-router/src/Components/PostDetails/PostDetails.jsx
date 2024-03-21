import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  const navigate=useNavigate()
  const detailsStyle = {
    border: "2px solid red",
    padding: "5px",
    borderRadius: "20px",
    marginBottom: "15px",
  };
  const handleGoBack=()=>{
    navigate(-1)
  }
  return (
    <div style={detailsStyle}>
      <h3>About Post Details : {id}</h3>
      <p>Title : {title}</p>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
