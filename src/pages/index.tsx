import ExperienceItem from '../components/ExperienceItem';
import RepoItem from '../components/RepoItem';
import { TechItem } from '../components/TechItem';
import { experience } from '../data/experience';
import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa6';
import {
  SiAmazonaws,
  SiAzurepipelines,
  SiC,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGithubactions,
  SiGnubash,
  SiGo,
  SiGodotengine,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJunit5,
  SiJupyter,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOracle,
  SiPandas,
  SiPostgresql,
  SiPowershell,
  SiPython,
  SiPytorch,
  SiQt,
  SiR,
  SiReact,
  SiRstudio,
  SiRust,
  SiSqlite,
  SiSvelte,
  SiTauri,
  SiTensorflow,
  SiTimescale,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from 'react-icons/si';

interface AppProps {
  stats: Record<string, number>;
}

const Index = ({ stats }: AppProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: 'easeOut', duration: 0.15 }}
      className='mt-24 w-full mb-32'
    >
      <div className='flex mt-36 mb-4'>
        <h1 className='font-bold text-4xl md:text-5xl mr-2'>Hey, I'm Elias</h1>
        <h1 className='text-4xl md:text-5xl wave'>👋</h1>
      </div>
      <p className='text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12'>
        Passionate developer and student; React.js + FastAPI + PostgreSQL stack advocate; Docker
        champion; Feel free to learn more about me 😉.
      </p>

      <h2 className='font-medium text-3xl mb-2'>Technologies 💻</h2>
      <ul className='flex flex-row flex-wrap justify-center w-full p-2 gap-1.5 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10'>
        <TechItem icon={SiPython} name='Python' />
        <TechItem icon={FaJava} name='Java' />
        <TechItem icon={SiGo} name='Go' />
        <TechItem icon={SiJavascript} name='JavaScript' />
        <TechItem icon={SiTypescript} name='TypeScript' />
        <TechItem icon={SiRust} name='Rust' />
        <TechItem icon={SiR} name='R' />
        <TechItem icon={SiC} name='C' />
        <TechItem icon={SiGodotengine} name='Godot' />
        <TechItem icon={SiHtml5} name='HTML' />
        <TechItem icon={SiCss3} name='CSS' />
        <TechItem icon={SiGnubash} name='Bash' />
        <TechItem icon={SiPowershell} name='PowerShell' />
        <TechItem icon={SiDjango} name='Django' />
        <TechItem icon={SiFlask} name='Flask' />
        <TechItem icon={SiFastapi} name='FastAPI' />
        <TechItem icon={SiReact} name='React.js' />
        <TechItem icon={SiVite} name='Vite.js' />
        <TechItem icon={SiVuedotjs} name='Vue.js' />
        <TechItem icon={SiNextdotjs} name='Next.js' />
        <TechItem icon={SiSvelte} name='Svelte' />
        <TechItem icon={SiExpress} name='Express.js' />
        <TechItem icon={SiNodedotjs} name='Node.js' />
        <TechItem icon={SiTauri} name='Tauri' />
        <TechItem icon={SiQt} name='Qt' />
        <TechItem icon={SiPostgresql} name='PostgreSQL' />
        <TechItem icon={SiTimescale} name='TimescaleDB' />
        <TechItem icon={SiSqlite} name='SQLite' />
        <TechItem icon={SiOracle} name='Oracle SQL' />
        <TechItem icon={SiMongodb} name='MongoDB' />
        <TechItem icon={SiPytorch} name='PyTorch' />
        <TechItem icon={SiTensorflow} name='TensorFlow' />
        <TechItem icon={SiJupyter} name='Jupyter' />
        <TechItem icon={SiRstudio} name='RStudio' />
        <TechItem icon={SiPandas} name='Pandas' />
        <TechItem icon={SiNumpy} name='NumPy' />
        <TechItem icon={SiAmazonaws} name='AWS' />
        <TechItem icon={SiOracle} name='Oracle Cloud' />
        <TechItem icon={SiGithubactions} name='GitHub Actions' />
        <TechItem icon={SiAzurepipelines} name='Azure Pipelines' />
        <TechItem icon={SiDocker} name='Docker' />
        <TechItem icon={SiJest} name='Jest.js' />
        <TechItem icon={SiJunit5} name='JUnit' />
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
          href='https://github.com/eliasbenb'
          rel='noreferrer'
          className='font-semibold text-blue-500 hover:underline'
        >
          GitHub
        </a>
        , where I contribute to various open-source projects. In total, I've earned{' '}
        <span className='font-bold text-black dark:text-slate-200'>{stats.stars}</span> stars and{' '}
        <span className='font-bold text-black dark:text-slate-200'>{stats.forks}</span> forks.
      </p>
    </motion.div>
  );
};

export async function getStaticProps() {
  const orgs = ['eliasbenb', 'DesterLib', 'libDrive'];

  let stats = { forks: 0, stars: 0 };
  for (const org of orgs) {
    const res = await fetch(`https://api.github.com/users/${org}/repos?type=owner&per_page=100`, {
      headers: {
        Authorization: process.env.GITHUB_TOKEN ? `Bearer ${process.env.GITHUB_TOKEN}` : '',
      },
    }).then((res) => res.json());
    for (const repo of res) {
      stats.forks += repo.forks_count;
      stats.stars += repo.stargazers_count;
    }
  }

  return {
    props: { stats },
    revalidate: 3600,
  };
}

export default Index;
