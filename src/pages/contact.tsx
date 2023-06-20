import ContactLink from '../components/talk/ContactLink';
import MessageComponent from '../components/talk/MessageComponent';
import TimeStatus from '../components/talk/TimeStatus';
import { motion } from 'framer-motion';
import React from 'react';
import { FiMail } from 'react-icons/fi';
import { SiDiscord, SiLinkedin, SiTwitter } from 'react-icons/si';

interface TalkProps {
  WEBHOOK_URL: string;
}

const Talk = ({ WEBHOOK_URL }: TalkProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: 'easeOut', duration: 0.15 }}
      className='mt-36 w-full'
    >
      <h1 className='text-black dark:text-white font-bold text-3xl mb-3 mt-8'>Let's chat 💬</h1>
      <p className='text-gray-800 dark:text-gray-200 mb-6'>
        Have an inquiry, or want to connect? Feel free to leave a message below, or get in touch via
        Discord, Twitter, or email.
      </p>

      <TimeStatus />

      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-20'>
        <MessageComponent WEBHOOK_URL={WEBHOOK_URL} />

        <div className='row-start-1 md:row-auto'>
          <ContactLink
            name='@eliasbenb'
            icon={<SiDiscord className='w-6 h-6 text-[#5865F2]' />}
            link='/discord'
            borderColor='hover:border-[#5865F2]/50'
          />
          <ContactLink
            name='@eliasbenb'
            icon={<SiLinkedin className='w-6 h-6 text-[#0A66C2]' />}
            link='/linkedin'
            borderColor='hover:border-[#1DA1F2]/50'
          />
          <ContactLink
            name='@eliasbenb'
            icon={<SiTwitter className='w-6 h-6 text-[#1DA1F2]' />}
            link='/twitter'
            borderColor='hover:border-[#1DA1F2]/50'
          />
          <ContactLink
            name='me@elias.eu.org'
            icon={<FiMail className='w-6 h-6 text-gray-400' />}
            link='/mail'
            borderColor='hover:border-gray-400/50'
          />
        </div>
      </div>
    </motion.div>
  );
};

export async function getStaticProps() {
  const WEBHOOK_URL = process.env.WEBHOOK_URL;
  return {
    props: { WEBHOOK_URL },
    revalidate: 3600,
  };
}

export default Talk;
