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
            <motion.b whileHover={{ color: "orange" }}>My</motion.b> Latest
            Projects
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
          <a href="#Portfolio">See Details</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>SGK COBOL Conversion Project</h2>
          <p>
            In this project, we were tasked with analyzing and converting black
            screens developed with COBOL. The conversion process involved
            analyzing the existing COBOL systems and developing new systems
            using Java for the backend. For the frontend, the user interface was
            completely redesigned using React, integrating various UI components
            and libraries to ensure a user-friendly experience. The result was a
            modernized system with a Java backend and a React frontend,
            providing a more user-friendly and sustainable solution.
          </p>
          <a href="#Portfolio">See Details</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Koz Games</h2>
          <p>
            Koz Games is a gaming website where users can purchase games, apply
            filters to games, and list the games they have purchased. For this
            project, Firebase was used for the backend to handle database
            management and user authentication, ensuring a secure and scalable
            infrastructure. React was used for the frontend, designing a
            user-friendly interface and integrating various UI components and
            libraries to enable game filtering and listing features. The result
            was a secure and user-friendly gaming website.
          </p>
          <a href="#Portfolio">See Details</a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Travel Decision Support System</h2>
          <p>
            The Travel Decision Support System is a sophisticated web
            application developed using React, designed to assist users in
            planning their ideal holiday. By leveraging the RapidAPI, the system
            gathers a vast array of travel-related data, including flight
            schedules, hotel accommodations, weather forecasts, and local
            attractions. Through intelligent analysis and processing, the system
            generates personalized recommendations tailored to the user's
            preferences and requirements. The intuitive interface of the
            application ensures that users can easily access and review the
            recommendations, empowering them to make well-informed travel
            decisions with ease and confidence.
          </p>
          <a href="#Portfolio">See Details</a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
