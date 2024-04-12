import { Suspense } from "react";
import  Footer from "../components/Footer.js";
import  Navbar  from "../components/NavBar.js";
import  Topbar  from "../components/Toapbar.js";

const AdminLayout = ({ children }) => {
  return (
    <Suspense>
      <Suspense>
        <Topbar />
      </Suspense>

      <Suspense>
        <Navbar />
      </Suspense>

      <Suspense >{children}</Suspense>

      <Suspense>
        <Footer hideLinks />
      </Suspense>
    </Suspense>
  );
};

export default AdminLayout;
