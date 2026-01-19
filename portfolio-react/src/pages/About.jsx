import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LazyImage } from 'react-lazy-load-image-component';
import { portfolioAPI } from '../api/portfolioAPI';
import { SkeletonAbout } from '../components/SkeletonLoader';
import './About.css';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function About() {
  const { t } = useTranslation();
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const data = await portfolioAPI.getExperience();
        setExperience(data);
      } catch (error) {
        console.error('Error fetching experience:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  const renderExperienceLeft = () => {
    return experience.slice(0, 3).map((job, index) => (
      <motion.div 
        key={job.id} 
        className="job-item"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <h3 className="job-title">{job.title}</h3>
        <p className="company-info">{job.company}</p>
        <p className="job-duration">{job.duration}</p>
        <div className="job-description">
          {Array.isArray(job.description) ? (
            <ul>
              {job.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          ) : (
            <p>{job.description}</p>
          )}
        </div>
      </motion.div>
    ));
  };

  const renderExperienceRight = () => {
    return experience.slice(3).map((job, index) => (
      <motion.div 
        key={job.id} 
        className="job-item"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <h3 className="job-title">{job.title}</h3>
        <p className="company-info">{job.company}</p>
        <p className="job-duration">{job.duration}</p>
        <div className="job-description">
          {Array.isArray(job.description) ? (
            <ul>
              {job.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          ) : (
            <p>{job.description}</p>
          )}
        </div>
      </motion.div>
    ));
  };

  if (loading) {
    return <SkeletonAbout />;
  }

  return (
    <motion.div 
      className="container"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.section className="about-section" variants={staggerContainer}>
        <motion.div variants={fadeIn}>
          <LazyImage
            src="/images/IMG_4896_Cropped.JPG"
            alt="Hafizh Alexander"
            className="profile-image"
            effect="blur"
            threshold={100}
          />
        </motion.div>
        
        <motion.div className="about-content" variants={fadeIn}>
          <p className="about-title">{t('about.aboutTitle')}</p>
          <h1 className="main-heading">{t('about.whoIs')}</h1>
          <p className="description">
            {t('about.description')}
          </p>
          
          <div className="stats">
            <motion.div className="stat-item" variants={fadeIn}>
              <div className="stat-number">150+</div>
              <div className="stat-label">{t('about.designsMade')}</div>
            </motion.div>
            <motion.div className="stat-item" variants={fadeIn}>
              <div className="stat-number">5+</div>
              <div className="stat-label">{t('about.projectsDone')}</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section 
        className="experience-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="experience-title">{t('about.experienceTitle')}</h2>
        
        <div className="experience-grid">
          <div className="experience-left">
            {renderExperienceLeft()}
          </div>

          <div className="experience-right">
            {renderExperienceRight()}
            
            <motion.div 
              className="skills-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3>{t('about.softSkills')}</h3>
              <p>{t('about.softSkillsList')}</p>
            </motion.div>

            <motion.div 
              className="expertise-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3>{t('about.expertise')}</h3>
              <p>{t('about.expertiseList')}</p>
            </motion.div>

            <motion.div 
              className="software-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3>{t('about.software')}</h3>
              <p>{t('about.softwareList')}</p>
            </motion.div>

            <motion.div 
              className="education-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3>{t('about.education')}</h3>
              <div className="education-degree">{t('about.degree')}</div>
              <div className="education-school">{t('about.school')}</div>
              <div className="education-duration">{t('about.duration')}</div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default About;
