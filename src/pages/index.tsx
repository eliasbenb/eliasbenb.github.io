import ExperienceItem from '../components/ExperienceItem';
import RepoItem from '../components/RepoItem';
import { TechItem } from '../components/TechItem';
import { experience } from '../data/experience';
import { motion } from 'framer-motion';
import {
  SiAmazonaws,
  SiCss3,
  SiDjango,
  SiDocker,
  SiElectron,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGithubactions,
  SiGnubash,
  SiGo,
  SiGodotengine,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiJupyter,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOracle,
  SiPandas,
  SiPostgresql,
  SiPowershell,
  SiPython,
  SiQt,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTimescale,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from 'react-icons/si';

interface AppProps {
  stats: Record<string, number>;
  repos: Record<any, any>;
}

const Index = ({ stats, repos }: AppProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: 'easeOut', duration: 0.15 }}
      className='mt-24 w-full mb-32'
    >
      <h1 className='mt-36 font-bold text-4xl md:text-5xl mb-4'>Hey, I'm Elias 👋</h1>
      <p className='text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12'>
        Passionate developer and student; refactoring and automation obsessor; Flask + React +
        PostgreSQL stack advocate; Docker champion. Feel free to learn more about me 😉.
      </p>

      <h2 className='font-medium text-3xl mb-2'>Technologies 💻</h2>
      <ul className='flex flex-row flex-wrap justify-center w-full p-2 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10'>
        <TechItem icon={SiPython} name='Python' />
        <TechItem icon={SiJava} name='Java' />
        <TechItem icon={SiGo} name='Go' />
        <TechItem icon={SiJavascript} name='JavaScript' />
        <TechItem icon={SiTypescript} name='TypeScript' />
        <TechItem icon={SiTailwindcss} name='TailwindCSS' />
        <TechItem icon={SiHtml5} name='HTML' />
        <TechItem icon={SiCss3} name='CSS' />
        <TechItem icon={SiGodotengine} name='Godot' />
        <TechItem icon={SiGnubash} name='Bash' />
        <TechItem icon={SiPowershell} name='PowerShell' />
        <TechItem icon={SiKotlin} name='Kotlin' />
        <TechItem icon={SiReact} name='React.js' />
        <TechItem icon={SiVite} name='Vite.js' />
        <TechItem icon={SiNextdotjs} name='Next.js' />
        <TechItem icon={SiVuedotjs} name='Vue.js' />
        <TechItem icon={SiExpress} name='Express.js' />
        <TechItem icon={SiNodedotjs} name='Node.js' />
        <TechItem icon={SiElectron} name='Electron.js' />
        <TechItem icon={SiDjango} name='Django' />
        <TechItem icon={SiFlask} name='Flask' />
        <TechItem icon={SiFastapi} name='FastAPI' />
        <TechItem icon={SiQt} name='Qt' />
        <TechItem icon={SiPostgresql} name='PostgreSQL' />
        <TechItem icon={SiTimescale} name='TimescaleDB' />
        <TechItem icon={SiSqlite} name='SQLite' />
        <TechItem icon={SiOracle} name='Oracle' />
        <TechItem icon={SiMysql} name='MySQL' />
        <TechItem icon={SiMongodb} name='MongoDB' />
        <TechItem icon={SiPandas} name='Pandas' />
        <TechItem icon={SiJupyter} name='Jupyter' />
        <TechItem icon={SiDocker} name='Docker' />
        <TechItem icon={SiAmazonaws} name='AWS' />
        <TechItem icon={SiGithubactions} name='GitHub Actions' />
      </ul>

      <h2 className='font-medium text-3xl mb-4 mt-12'>Experience 💼</h2>
      <div className='w-full grid grid-cols-1 mb-8 gap-2'>
        {experience.map((exp) => {
          return <ExperienceItem key={exp.title + exp.title} {...exp} />;
        })}
      </div>

      <h2 className='font-medium text-3xl mb-4'>Projects 🛠️</h2>
      <p className='text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6'>
        Check me out on{' '}
        <a
          href='https:/https://github.com/eliasbenb.com/eliasbenb'
          rel='noreferrer'
          className='font-semibold text-blue-500 hover:underline'
        >
          GitHub
        </a>
        , where I contribute to various open-source projects. In total, I've earned{' '}
        <span className='font-bold text-black dark:text-slate-200'>{stats.stars}</span> stars and{' '}
        <span className='font-bold text-black dark:text-slate-200'>{stats.forks}</span> forks. Feel
        free to check out my heavy hitters:
      </p>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2'>
        {repos.map((repo: Record<string, any>) => {
          return (
            <RepoItem
              key={repo.name}
              name={repo.name}
              url={repo.html_url}
              description={repo.description}
              stars={repo.stargazers_count}
              forks={repo.forks_count}
              language={repo.language}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export async function getStaticProps() {
  const orgs = ['eliasbenb', 'DesterLib', 'libDrive'];
  const wanted = [
    'DesterLib/DesterLib',
    'libDrive/libDrive',
    'eliasbenb/plannitt',
    'eliasbenb/MagnetMagnet',
  ];

  let stats = { forks: 0, stars: 0 };
  let repos = [];
  for (const org of orgs) {
    const res = await fetch(`https://api.github.com/users/${org}/repos?type=owner&per_page=100`, {
      headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
    }).then((res) => res.json());
    for (const repo of res) {
      if (wanted.includes(repo.full_name)) {
        repos.push(repo);
      }
      stats.forks += repo.forks_count;
      stats.stars += repo.stargazers_count;
    }
  }

  return {
    props: { stats, repos },
    revalidate: 3600,
  };
}

export default Index;
