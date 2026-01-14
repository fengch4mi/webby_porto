import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BackgroundCircles from '../components/BackgroundCircles';
import './Home.css';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <BackgroundCircles />
      <div className="decorative-line"></div>
      <motion.main 
        className="hero-section"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div className="hero-content" variants={fadeIn}>
          <motion.h1 className="hero-title" variants={fadeIn}>
            {t('home.greeting')}<br />{t('home.name')}
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeIn}>
            {t('home.subtitle')}
          </motion.h2>
          <motion.p className="hero-description" variants={fadeIn}>
            {t('home.description')}
          </motion.p>
          <motion.div className="cta-buttons" variants={fadeIn}>
            <Link to="/about" className="cta-button">{t('home.moreAboutMe')}</Link>
            <a 
              href="https://drive.google.com/file/d/1wXZAM1c8SWobq5XRCozAcdV1GwRgRyeJ/view?usp=sharing" 
              className="cta-button-cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('home.viewCV')}
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img src={`${import.meta.env.BASE_URL}images/IMG_4896_Cropped.JPG`} alt="Hafizh Alexander" className="profile-image" />
        </motion.div>
      </motion.main>
    </>
  );
}

export default Home;
