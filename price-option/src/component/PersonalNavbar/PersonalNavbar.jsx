import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill,RiMenuSearchFill } from "react-icons/ri";

const PersonalNavbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/services", name: "Services", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
    { path: "/gallery", name: "Gallery", id: 5 },
  ];

  return (
    <nav className="text-black bg-red-400  p-6 flex justify-around">
      <div onClick={() => setOpen(!open)} className=" md:hidden text-2xl">
        {open === true ? <RiMenu2Fill></RiMenu2Fill> :<RiMenuSearchFill></RiMenuSearchFill>}
      </div>
      <ul className={`md:flex duration-1000 absolute md:static ${open? 'top-16': '-top-60'} bg-red-400 px-6`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default PersonalNavbar;
