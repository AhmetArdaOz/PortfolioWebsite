import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>AHMET ARDA ÖZ</motion.h2>
          <motion.h1 variants={textVariants}>Computer Engineer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a variants={textVariants} href="#Portfolio">
              My Latest Work
            </motion.a>
            <motion.a variants={textVariants} href="#Contact">
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          ></motion.img>
        </motion.div>
      </div>
      <motion.div
        className="slidingtextContainer"
        variants={sliderVariants}
        initial="intial"
        animate="animate"
      >
        Innovating Software, Transforming Ideas, Engineering the Future.
      </motion.div>
      <div className="imageContainer">
        <img src="/foto1.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
