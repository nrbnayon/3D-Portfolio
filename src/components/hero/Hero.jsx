import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFilePersonFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  const handleResumeDownload = () => {
    window.open("YOUR_RESUME_LINK", "_blank");
  };

  return (
    <div className='hero'>
      <div className='hSection left'>
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='hTitle'
        >
          Hey There,
          <br />
          <span>I&apos;m Nayon!</span>
        </motion.h1>
        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial='initial'
          animate='animate'
          className='awards'
        >
          <motion.h2 variants={awardVariants}>Jr. Frontend Developer</motion.h2>
          <motion.p variants={awardVariants}>
            To leverage my expertise in crafting seamless user experiences and
            visually stunning animations using advanced tools and library. I aim
            to develop dynamic, data-driven visualizations and reusable
            components with React.js and Next.js, while integrating frontend
            applications with backend systems and RESTful APIs. Committed to
            collaborating with designers, developers, and stakeholders to
            deliver high-quality, innovative products that elevate user
            satisfaction and drive business success.
          </motion.p>
          <motion.div variants={awardVariants} className='awardList'>
            <motion.a
              variants={awardVariants}
              href='https://www.linkedin.com/in/itsnayon'
              target='_blank'
              rel='noopener noreferrer'
              className='award-social-link'
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              variants={awardVariants}
              href='https://github.com/nrbnayon'
              target='_blank'
              rel='noopener noreferrer'
              className='award-social-link'
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              variants={awardVariants}
              href='https://nrbnayon.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='award-social-link'
            >
              <BsFilePersonFill size={20} />
            </motion.a>
            <motion.button
              variants={awardVariants}
              onClick={handleResumeDownload}
              className='resume-btn'
            >
              <HiDownload />
              Download Resume
            </motion.button>
          </motion.div>
          {/* <motion.div variants={awardVariants} className='awardList'>
            <motion.img variants={awardVariants} src='/award1.png' alt='' />
            <motion.img variants={awardVariants} src='/award2.png' alt='' />
            <motion.img variants={awardVariants} src='/award3.png' alt='' />

            <motion.img
              variants={followVariants}
              href='https://www.linkedin.com/in/itsnayon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin size={20} />
            </motion.img>
            <motion.img
              variants={followVariants}
              href='https://github.com/nrbnayon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub size={20} />
            </motion.img>
            <motion.img
              variants={followVariants}
              href='https://nrbnayon.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsFilePersonFill size={20} />
            </motion.img>
            <motion.button
              variants={awardVariants}
              onClick={handleResumeDownload}
              className='resume-btn'
            >
              <HiDownload />
              Download Resume
            </motion.button>
          </motion.div> */}
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href='#services'
          className='scroll'
        >
          <svg
            width='50px'
            height='50px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z'
              stroke='white'
              strokeWidth='1'
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d='M12 5V8'
              stroke='white'
              strokeWidth='1'
              strokeLinecap='round'
            />
          </svg>
        </motion.a>
      </div>
      <div className='hSection right'>
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial='initial'
          animate='animate'
          className='follow'
        >
          <motion.a
            variants={followVariants}
            href='https://www.linkedin.com/in/itsnayon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a
            variants={followVariants}
            href='https://github.com/nrbnayon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            variants={followVariants}
            href='https://nrbnayon.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsFilePersonFill size={20} />
          </motion.a>
          <motion.div variants={followVariants} className='followTextContainer'>
            <div className='followText'>FOLLOW ME</div>
          </motion.div>
        </motion.div>
        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className='certificate'
        >
          CERTIFICED
          <br />
          MERN Stack
          <br />
          Developer
        </motion.div>
        {/* CONTACT BUTTON */}
        <motion.a
          href='/#contact'
          className='contactLink'
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        >
          <motion.div
            className='contactButton'
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox='0 0 200 200' width='150' height='150'>
              <circle cx='100' cy='100' r='90' fill='pink' />
              <path
                id='innerCirclePath'
                fill='none'
                d='M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0'
              />
              <text className='circleText'>
                <textPath href='#innerCirclePath'>Hire Now •</textPath>
              </text>
              <text className='circleText'>
                <textPath href='#innerCirclePath' startOffset='44%'>
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className='arrow'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='50'
                height='50'
                fill='none'
                stroke='black'
                strokeWidth='2'
              >
                <line x1='6' y1='18' x2='18' y2='6' />
                <polyline points='9 6 18 6 18 15' />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className='bg'>
        <Canvas>
          <Suspense fallback='loading...'>
            <Shape />
          </Suspense>
        </Canvas>
        <div className='hImg'>
          <img src='/hero.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
