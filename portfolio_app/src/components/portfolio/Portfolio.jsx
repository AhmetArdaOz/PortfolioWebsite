import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "SGK COBOL Conversion Project",
    img: "https://www.sgk.gov.tr/cdn/v2/common/img/kurumsal%20logo-2.png",
    desc: "In this project, we were tasked with analyzing and converting black screens developed with COBOL. The conversion process involved analyzing the existing COBOL systems and developing new systems using Java for the backend. For the frontend, the user interface was completely redesigned using React, integrating various UI components and libraries to ensure a user-friendly experience. The result was a modernized system with a Java backend and a React frontend, providing a more user-friendly and sustainable solution.",
  },
  {
    id: 2,
    title: "MovieHub",
    img: "/MOVIEHUB.png",
    desc: "MovieHub is designed to serve as an innovative movie recommendation platform, distinguishing itself through the integration of personalized recommendation algorithms and a user-friendly interface. The product is envisioned as a new, standalone web application inspired by popular platforms like IMDb, but with enhanced focus on personalized user experience.",
  },
  {
    id: 3,
    title: "Koz Games",
    img: "/Koz_Games.png",
    desc: "Koz Games is a gaming website where users can purchase games, apply filters to games, and list the games they have purchased. For this project, Firebase was used for the backend to handle database management and user authentication, ensuring a secure and scalable infrastructure. React was used for the frontend, designing a user-friendly interface and integrating various UI components and libraries to enable game filtering and listing features. The result was a secure and user-friendly gaming website.",
  },
  {
    id: 4,
    title: " Voice Warping",
    img: "https://www.hibedestek.com.tr/wp-content/uploads/2015/04/i%C5%9Fkur.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis facilisis varius. Quisque mi nisi, lobortis ut dolor quis, congue ornare justo. Sed feugiat aliquam mi facilisis ullamcorper. In vitae egestas nisi. Duis ac varius nunc. In hac habitasse platea dictumst. Phasellus consectetur auctor sem.",
  },
  {
    id: 5,
    title: "Ascendary",
    img: "https://www.hibedestek.com.tr/wp-content/uploads/2015/04/i%C5%9Fkur.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis facilisis varius. Quisque mi nisi, lobortis ut dolor quis, congue ornare justo. Sed feugiat aliquam mi facilisis ullamcorper. In vitae egestas nisi. Duis ac varius nunc. In hac habitasse platea dictumst. Phasellus consectetur auctor sem.",
  },
  {
    id: 6,
    title: "House Tour Website Project",
    img: "https://www.hibedestek.com.tr/wp-content/uploads/2015/04/i%C5%9Fkur.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis facilisis varius. Quisque mi nisi, lobortis ut dolor quis, congue ornare justo. Sed feugiat aliquam mi facilisis ullamcorper. In vitae egestas nisi. Duis ac varius nunc. In hac habitasse platea dictumst. Phasellus consectetur auctor sem.",
  },
  {
    id: 7,
    title: "Notes App",
    img: "https://www.hibedestek.com.tr/wp-content/uploads/2015/04/i%C5%9Fkur.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis facilisis varius. Quisque mi nisi, lobortis ut dolor quis, congue ornare justo. Sed feugiat aliquam mi facilisis ullamcorper. In vitae egestas nisi. Duis ac varius nunc. In hac habitasse platea dictumst. Phasellus consectetur auctor sem.",
  },
  {
    id: 8,
    title: "Travel Decision Support System",
    img: "https://www.hibedestek.com.tr/wp-content/uploads/2015/04/i%C5%9Fkur.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis facilisis varius. Quisque mi nisi, lobortis ut dolor quis, congue ornare justo. Sed feugiat aliquam mi facilisis ullamcorper. In vitae egestas nisi. Duis ac varius nunc. In hac habitasse platea dictumst. Phasellus consectetur auctor sem.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start ", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See in Github</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end ", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
