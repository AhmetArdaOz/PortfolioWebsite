import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ahmet Arda öz
        </motion.span>
        <div className="social">
          <a href="https://github.com/AhmetArdaOz">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ahmet-arda-öz-38952b224">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
