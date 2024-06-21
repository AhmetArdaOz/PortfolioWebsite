import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duraiton: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   animate="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Empowering Your Brand with Innovative Engineering <br />
          and Strategic Solutions.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt=""></img>
          <h1>
            <motion.b whileHover={{ color: "orange" }}>From</motion.b> now on
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>My</motion.b> Projects
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MovieHub</h2>
          <p>
            MovieHub is designed to serve as an innovative movie recommendation
            platform, distinguishing itself through the integration of
            personalized recommendation algorithms and a user-friendly
            interface. The product is envisioned as a new, standalone web
            application inspired by popular platforms like IMDb, but with
            enhanced focus on personalized user experience.
          </p>
          <button>See Details</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MovieHub</h2>
          <p>
            MovieHub is designed to serve as an innovative movie recommendation
            platform, distinguishing itself through the integration of
            personalized recommendation algorithms and a user-friendly
            interface. The product is envisioned as a new, standalone web
            application inspired by popular platforms like IMDb, but with
            enhanced focus on personalized user experience.
          </p>
          <button>See Details</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MovieHub</h2>
          <p>
            MovieHub is designed to serve as an innovative movie recommendation
            platform, distinguishing itself through the integration of
            personalized recommendation algorithms and a user-friendly
            interface. The product is envisioned as a new, standalone web
            application inspired by popular platforms like IMDb, but with
            enhanced focus on personalized user experience.
          </p>
          <button>See Details</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MovieHub</h2>
          <p>
            MovieHub is designed to serve as an innovative movie recommendation
            platform, distinguishing itself through the integration of
            personalized recommendation algorithms and a user-friendly
            interface. The product is envisioned as a new, standalone web
            application inspired by popular platforms like IMDb, but with
            enhanced focus on personalized user experience.
          </p>
          <button>See Details</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
