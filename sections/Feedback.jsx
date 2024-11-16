'use client';

import { motion } from 'framer-motion';

import styles from './Feedback.module.css'; // Assuming you're using a CSS Module
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const teamMembers = [
  {
    id: 1,
    name: 'Bhaanavee C S',
    role: 'Team Lead',
    photoUrl: '/bee.jpg', // Add the image URL here
  },
  {
    id: 2,
    name: 'Greeshma V',
    role: 'Team member',
    photoUrl: '/gree.jpg', // Corrected path here
  },
  {
    id: 3,
    name: 'Himanshi Singh',
    role: 'Team member',
    photoUrl: '/himanshi.jpg',
  },
  {
    id: 4,
    name: 'Vaishnavi Reddy',
    role: 'Team member',
    photoUrl: '/vaish.jpg',
  },
];

const Feedback = () => (
  <section className={styles.paddings}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      {teamMembers.map((member) => (
        <motion.div
          key={member.id}
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className={`${styles.card}`}
        >
          <div className={`${styles.imageContainer}`}>
            <img
              src={member.photoUrl}
              alt={member.name}
              className={`${styles.image}`}
            />
          </div>
          <h4 className={`${styles.name}`}>{member.name}</h4>
          <p className={`${styles.role}`}>{member.role}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Feedback;

