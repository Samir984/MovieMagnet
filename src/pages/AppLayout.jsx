import { Outlet } from "react-router-dom";
import Header from "../ui/header/Header";
import Footer from "../ui/Footer";

function AppLayout() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default AppLayout;
