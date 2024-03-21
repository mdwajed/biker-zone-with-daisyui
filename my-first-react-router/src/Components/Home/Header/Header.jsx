import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h2>This is Header</h2>
      <nav>
        <NavLink to="/"></NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/post/:postId">Post</NavLink>
      </nav>
    </div>
  );
};

export default Header;
