import { motion } from 'framer-motion';
import { AiOutlineStar } from 'react-icons/ai';
import { BiGitRepoForked } from 'react-icons/bi';

const Languages = {
  TypeScript: '#2b7489',
  Python: '#3572A5',
  CSS: '#563d7c',
  HTML: '#e34c26',
  JavaScript: '#f1e05a',
  Java: '#b07219',
  Go: '#00ADD8',
  Shell: '#89e051',
  PowerShell: '#012456',
  null: '#ffffff',
};

interface RepoProps {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language:
    | 'TypeScript'
    | 'Python'
    | 'CSS'
    | 'HTML'
    | 'JavaScript'
    | 'Java'
    | 'Go'
    | 'Shell'
    | 'PowerShell'
    | 'null';
}

const RepoItem = ({ name, description, url, stars, forks, language }: RepoProps) => {
  return (
    <a href={url} rel='noreferrer' target='_blank'>
      <div className='flex flex-col h-[9.5rem] p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer'>
        <h1 className='font-semibold mb-1'>{name}</h1>
        <p className='text-sm text-gray-800/70 dark:text-gray-100/70 line-clamp-3'>{description}</p>
        <div className='flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm mt-3 mt-auto'>
          {language && (
            <div className='flex flex-row items-center'>
              <motion.div
                className='w-3 h-3 rounded-full mr-1'
                style={{
                  background: Languages[language],
                  border: `solid 3px ${Languages[language]}`,
                }}
              />
              {language}
            </div>
          )}

          <p className='flex flex-row items-center justify-center'>
            <AiOutlineStar className='mr-1 w-4 h-4' /> {stars}
          </p>
          <p className='flex flex-row items-center justify-center'>
            <BiGitRepoForked className='mr-1 w-4 h-4' /> {forks}
          </p>
        </div>
      </div>
    </a>
  );
};

export default RepoItem;
