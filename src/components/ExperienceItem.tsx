interface ExperienceProps {
  title: string;
  company: string;
  start: Date;
  end: Date | null;
  description: string;
}

const ExperienceItem = ({ title, company, start, end, description }: ExperienceProps) => {
  return (
    <a href='/resume' rel='noreferrer' target='_blank'>
      <div className='flex flex-col h-42 md:h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer'>
        <div className='flex flex-col md:flex-row justify-between md:items-center mb-1'>
          <div>
            <h1 className='font-semibold truncate'>{title}</h1>
            <h2 className='text-sm font-medium'>@ {company}</h2>
          </div>
          <p className='text-xs md:self-start md:mt-[3px]'>
            {start.toLocaleString('default', {
              month: 'short',
              year: 'numeric',
              timeZone: 'UTC',
            })}{' '}
            -{' '}
            {end?.toLocaleString('default', {
              month: 'short',
              year: 'numeric',
              timeZone: 'UTC',
            }) || 'Currently'}
          </p>
        </div>
        <p className='text-xs text-gray-800/70 dark:text-gray-100/70 whitespace-pre-wrap line-clamp-4'>
          {description}
        </p>
      </div>
    </a>
  );
};

export default ExperienceItem;
