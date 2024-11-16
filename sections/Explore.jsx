'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import ExploreCard from '../components/ExploreCard';
import { TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-1'); // Default active card is 'world-1'

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* Heading with typing effect */}
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={<>Choose the world you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />

        {/* Cards Section */}
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world} // Spreads id, imgUrl, title, and link from exploreWorlds
              index={index}
              active={active}
              handleClick={setActive} // Updates the active card state
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
