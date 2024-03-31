import { Outlet } from "react-router-dom";
import Nabvar from "../Pages/Shared/Nabvar/Nabvar";
import Footer from "../Pages/Shared/Footer/Footer";


const Root = () => {
    return (
     <div>
           <div>
       <Nabvar></Nabvar>
          <Outlet></Outlet> 
        </div>
        <Footer></Footer>
     </div>
    );
};

export default Root;