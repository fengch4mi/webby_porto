import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { portfolioAPI } from '../api/portfolioAPI';
import { SkeletonGrid } from '../components/SkeletonLoader';
import Carousel from '../components/Carousel';
import './Portfolio.css';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Portfolio() {
  const { t } = useTranslation();
  const [socialMedia, setSocialMedia] = useState(null);
  const [uiProjects, setUIProjects] = useState(null);
  const [personalWorks, setPersonalWorks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [socialData, uiData, personalData] = await Promise.all([
          portfolioAPI.getSocialMediaDesigns(),
          portfolioAPI.getUIProjects(),
          portfolioAPI.getPersonalWorks()
        ]);
        setSocialMedia(socialData);
        setUIProjects(uiData);
        setPersonalWorks(personalData);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <SkeletonGrid />;
  }

  return (
    <>
      {/* Header dengan Judul */}
      <motion.header 
        className="fullscreen-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-container">
          <motion.div 
            className="portfolio-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('portfolio.subtitle')}
          </motion.div>
          <motion.h1 
            className="header-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Alex's<br />Works
          </motion.h1>
        </div>
      </motion.header>

      {/* Wrapper untuk Semua Konten Portfolio */}
      <div className="portfolio-content-wrapper">
        <div className="main-container">

          {/* Bagian Social Media Designs */}
          <motion.section 
            className="portfolio-section" 
            id="social-media-section"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div className="section-title-container" variants={fadeIn}>
              <h2 className="section-title">{t('portfolio.socialMedia.title')}</h2>
              <p className="section-subtitle">{t('portfolio.socialMedia.subtitle')}</p>
            </motion.div>

            {/* Baris 1: Skala 1:1 */}
            {socialMedia && (
              <>
                <motion.div className="image-grid grid-cols-3" variants={fadeIn}>
                  {socialMedia.row1.map((img, index) => (
                    <motion.div 
                      key={img.id} 
                      className="placeholder aspect-1-1"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    >
                      <img src={img.src} alt={img.alt} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Baris 2: Marquee */}
                <div className="marquee-container">
                  <div className="marquee-content">
                    {/* Duplicate items for seamless loop */}
                    {[...socialMedia.marquee, ...socialMedia.marquee].map((img, index) => (
                      <div key={`${img.id}-${index}`} className="placeholder aspect-4-5">
                        <img src={img.src} alt={img.alt} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Baris 3: Skala 4:5 */}
                <motion.div className="image-grid grid-cols-3" variants={fadeIn}>
                  {socialMedia.row3.map((img, index) => (
                    <motion.div 
                      key={img.id} 
                      className="placeholder aspect-4-5"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    >
                      <img src={img.src} alt={img.alt} />
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </motion.section>

          {/* Bagian UI Projects */}
          <motion.section 
            className="portfolio-section ui-projects-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-title-container ui-projects-title">
              <h2 className="section-title">{t('portfolio.uiProjects.title')}</h2>
            </div>

            {/* Hero UI Project */}
            {uiProjects && (
              <>
                <motion.div 
                  className="ui-hero-container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="ui-images-overlap">
                    <motion.div 
                      className="ui-image-back"
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <img src={uiProjects.hero.images[0].src} alt={uiProjects.hero.images[0].alt} />
                    </motion.div>
                    <motion.div 
                      className="ui-image-front"
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <img src={uiProjects.hero.images[1].src} alt={uiProjects.hero.images[1].alt} />
                    </motion.div>
                  </div>
                  <motion.div 
                    className="ui-project-info"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="ui-project-title">{t('portfolio.uiProjects.mainTitle')}</h3>
                    <p className="ui-project-description">
                      {t('portfolio.uiProjects.description')}
                    </p>
                    <ul className="ui-feature-list">
                      <li>{t('portfolio.uiProjects.feature1')}</li>
                      <li>{t('portfolio.uiProjects.feature2')}</li>
                      <li>{t('portfolio.uiProjects.feature3')}</li>
                    </ul>
                  </motion.div>
                </motion.div>

                {/* Carousel untuk UI Projects Lainnya */}
                <motion.div 
                  className="ui-carousel-section"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="carousel-label">{t('portfolio.uiProjects.moreWorks')}</h3>
                  <Carousel items={uiProjects.carousel} />
                </motion.div>
              </>
            )}
          </motion.section>

          {/* Bagian Personal Works */}
          <motion.section 
            className="portfolio-section personal-works-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-title-container personal-works-title">
              <h2 className="section-title">{t('portfolio.personalWorks.title')}</h2>
            </div>

            {personalWorks && (
              <>
                {/* Baris 1: Skala 1:1 */}
                <motion.div 
                  className="image-grid grid-cols-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {personalWorks.row1.map((img, index) => (
                    <motion.div 
                      key={img.id} 
                      className="placeholder aspect-1-1"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    >
                      <img src={img.src} alt={img.alt} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Baris 2: Skala Campuran */}
                <motion.div 
                  className="image-grid mixed-grid"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {personalWorks.row2.map((img, index) => (
                    <motion.div 
                      key={img.id} 
                      className={`placeholder ${img.size === 'large' ? 'aspect-a4' : 'aspect-4-5 small-center'}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                    >
                      <img src={img.src} alt={img.alt} />
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </motion.section>

        </div>
      </div>
    </>
  );
}

export default Portfolio;
