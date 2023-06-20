import { motion } from 'framer-motion';
import { useLanyard } from 'use-lanyard';

const parseImgUrl = (url: string = '', appId: number = 0) => {
  if (url.startsWith(`mp:external`)) {
    return `https://media.discordapp.net/${url.replace(/mp:/, ``)}`;
  } else {
    return `https://cdn.discordapp.com/app-assets/${appId}/${url}.png`;
  }
};

const Activity = () => {
  const { data: user } = useLanyard('641234002023415808');

  if (!user?.activities?.length) {
    return null;
  }

  const code = user.activities.find((activity) => activity.name === 'Code');
  const spotify = user.spotify;

  return code ? (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: -100 }}
      transition={{ duration: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
      className='w-[20rem] h-[7rem] flex-col items-start justify-start hidden 2xl:flex 2xl:fixed 2xl:left-6 2xl:-bottom-20'
    >
      <h1 className='text-black dark:text-gray-100 font-semibold text-base mb-2 flex items-center justify-center'>
        <span className='mr-2 w-2 h-2'>
          <span className='absolute w-2 h-2 bg-red-600 rounded-full animate-ping' />
          <span className='absolute w-2 h-2 bg-red-600 rounded-full' />
        </span>
        Coding
      </h1>

      <div className='w-full h-[6rem] flex flex-row items-center justify-start'>
        <img
          src={parseImgUrl(code.assets?.large_image, code.application_id)}
          className='w-[4.5rem] h-[4.5rem] rounded-md mr-4 pointer-events-none'
          alt={code.assets?.large_text}
        />
        <div className='w-56 h-full flex flex-col items-start justify-center'>
          <p className='w-full font-medium text-gray-900 dark:text-[#e1eafd] truncate'>
            {code.state}
          </p>
          <p className='w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm line-clamp-2'>
            {code.details}
          </p>
        </div>
      </div>
    </motion.div>
  ) : spotify ? (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: -100 }}
      transition={{ duration: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
      className='w-[20rem] h-[7rem] flex-col items-start justify-start hidden 2xl:flex 2xl:fixed 2xl:left-6 2xl:-bottom-20'
    >
      <h1 className='text-black dark:text-gray-100 font-semibold text-base mb-2 flex items-center justify-center'>
        <span className='mr-2 w-2 h-2'>
          <span className='absolute w-2 h-2 bg-red-600 rounded-full animate-ping' />
          <span className='absolute w-2 h-2 bg-red-600 rounded-full' />
        </span>
        Music
      </h1>

      <div className='w-full h-[6rem] flex flex-row items-center justify-start'>
        <img
          src={spotify.album_art_url}
          className='w-[4.5rem] h-[4.5rem] rounded-md mr-4 pointer-events-none'
          alt={spotify.album}
        />
        <div className='w-56 h-full flex flex-col items-start justify-center'>
          <a
            href={`https://open.spotify.com/track/${spotify.track_id}`}
            target='_blank'
            rel='noreferrer'
            className='w-full font-medium text-gray-900 dark:text-[#e1eafd] hover:underline truncate'
          >
            {spotify.song}
          </a>
          <p className='w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm line-clamp-2'>
            {spotify.artist}
          </p>
        </div>
      </div>
    </motion.div>
  ) : (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: -100 }}
      transition={{ duration: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
      className='fixed left-6 -bottom-20 w-[20rem] h-[7rem] hidden lg:flex flex-col items-start justify-start'
    >
      <h1 className='text-black dark:text-gray-100 font-semibold text-base mb-2 flex items-center justify-center'>
        <span className='mr-2 w-2 h-2'>
          <span className='absolute w-2 h-2 bg-gray-600 rounded-full' />
          <span className='absolute w-2 h-2 bg-gray-600 rounded-full' />
        </span>
        Offline
      </h1>

      <div className='w-full h-[6rem] flex flex-row items-center justify-start'>
        <img
          src='/assets/offline.png'
          className='w-[4.5rem] h-[4.5rem] rounded-md mr-4 pointer-events-none'
          alt='Away from keyboard'
        />
      </div>
    </motion.div>
  );
};

export default Activity;
