import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
