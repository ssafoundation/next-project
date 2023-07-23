import MainFooter from "../common/MainFooter";
import MainHeader from "../common/MainHeader";

const Layout = ({ children }) => {
  return (
    <div>
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
};

export default Layout;
