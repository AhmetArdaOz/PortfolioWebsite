import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "SGK COBOL Conversion Project",
    img: "https://www.sgk.gov.tr/cdn/v2/common/img/kurumsal%20logo-2.png",
    desc: "In this project, we were tasked with analyzing and converting black screens developed with COBOL. The conversion process involved analyzing the existing COBOL systems and developing new systems using Java for the backend. For the frontend, the user interface was completely redesigned using React, integrating various UI components and libraries to ensure a user-friendly experience. The result was a modernized system with a Java backend and a React frontend, providing a more user-friendly and sustainable solution.",
    linkUrl: "",
  },
  {
    id: 2,
    title: "MovieHub",
    img: "/MOVIEHUB.png",
    desc: "MovieHub is designed to serve as an innovative movie recommendation platform, distinguishing itself through the integration of personalized recommendation algorithms and a user-friendly interface. The product is envisioned as a new, standalone web application inspired by popular platforms like IMDb, but with enhanced focus on personalized user experience.",
    linkUrl: "https://github.com/AhmetArdaOz/Bitirme-Projesi",
  },
  {
    id: 3,
    title: "Koz Games",
    img: "/Koz_Games.png",
    desc: "Koz Games is a gaming website where users can purchase games, apply filters to games, and list the games they have purchased. For this project, Firebase was used for the backend to handle database management and user authentication, ensuring a secure and scalable infrastructure. React was used for the frontend, designing a user-friendly interface and integrating various UI components and libraries to enable game filtering and listing features. The result was a secure and user-friendly gaming website.",
    linkUrl: "",
  },
  {
    id: 4,
    title: "PureFx",
    img: "/voice_warping.jpg",
    desc: "PureFx provides users with a comprehensive suite of features for manipulating and analyzing audio files. Users can save and upload voice recordings, alter them using various advanced tools, and save the modified audio. A key feature is the spectrum graph, which offers a detailed visualization of the audio's frequency content, aiding in understanding and analyzing changes. This project empowers users to experiment with their voice recordings, making it a valuable resource for voice manipulation and audio analysis through its extensive toolset and visualization options.",
    linkUrl: "https://github.com/galaxyutku/Voice-Warping",
  },
  {
    id: 5,
    title: "Ascendary",
    img: "/Ascendary.png",
    desc: "Ascendancy is a 2D platformer that combines the challenging mechanics of Only Up and Jump King with the atmospheric aesthetics of gothicvania and dark fantasy themes. The game follows the journey of our protagonist, who, having been exiled from their city, embarks on a perilous quest to reach their home situated at the pinnacle of a mysterious and treacherous environment.",
    linkUrl: "https://github.com/galaxyutku/Ascendary",
  },
  {
    id: 6,
    title: "Notes App",
    img: "/note_app.jpg",
    desc: "The Notes App, developed with Kotlin, Android SDK, and REST API integration, allows users to effortlessly create, edit, and delete personal notes. It features a Random Quote display that fetches motivational quotes from a REST API each time the home page is visited. The app's clean, intuitive interface ensures easy navigation, while local storage guarantees notes are saved and retrievable after closing or restarting the app. Optimized for smooth performance across various Android devices, the Notes App is a reliable and user-friendly tool for managing personal notes.",
    linkUrl: "https://github.com/AhmetArdaOz/Notes_App",
  },
  {
    id: 7,
    title: "Travico",
    img: "/Travico.png",
    desc: "The Travel Decision Support System is a sophisticated web application developed using React, designed to assist users in planning their ideal holiday. By leveraging the RapidAPI, the system gathers a vast array of travel-related data, including flight schedules, hotel accommodations, weather forecasts, and local attractions. Through intelligent analysis and processing, the system generates personalized recommendations tailored to the user's preferences and requirements. The intuitive interface of the application ensures that users can easily access and review the recommendations, empowering them to make well-informed travel decisions with ease and confidence.",
    linkUrl: "https://github.com/galaxyutku/Travel-Decision-Support-System",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
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
            {item.linkUrl && (
              <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
                <button>See in Github</button>
              </a>
            )}
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
