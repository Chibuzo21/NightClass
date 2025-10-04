import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Structure() {
  return (
    <div>
      <Header />
      <div className='min-h-[90vh] p-20'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
