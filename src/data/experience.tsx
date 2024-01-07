let experience = [
  {
    title: 'Server Engineer',
    company: 'DBMI PITT',
    link: 'https://dbmi.pitt.edu', // Add the link if available
    start: new Date('2023-08-01'),
    end: undefined, // Ongoing
    bullets: [
      `Developed a service to query and visualize medical summary data of PCORnet, a national medical network serving tens of millions of patients, establishing its foundations with React.js and FastAPI.`,
      `Scripted SAS and SQL programs to analyze and generate statistical summaries of PCORnet's extensive patient data.`,
      `Deployed a high-performance Linux server for machine learning and AI in academic research, configured to host a modified JupyterHub instance, secure sensitive data, and enforce memory/CPU user quotas using Docker.`,
      `Engineered an API for querying various self-hosted AI language models, optimizing for efficiency by integrating block-wise quantization and request queuing to manage the high GPU load that comes with hosting multiple large language models.`,
    ],
    skills: [
      'Python',
      'TypeScript',
      'React.js',
      'FastAPI',
      'PostgreSQL',
      'SAS 9',
      'Transformers',
      'Jupyter',
      'Docker',
    ],
  },
  {
    title: 'Software Engineering Consultant',
    company: 'CAASI',
    link: 'https://www.412connect.org',
    start: new Date('2023-07-01'),
    end: new Date('2023-09-01'),
    bullets: [
      `Reengineered the 412Connect project, a service to educate and inform the public about local business, end-to-end, being responsible for backend, frontend, and database design using a Django, React.js, and SQLite stack.`,
      `Designed a comprehensive user analytics system for 412Connect featuring a dashboard, charts, graphs, and a search function.`,
      `Managed DevOps, including the creation of CI/CD test workflows and build pipelines using GitHub Actions and Jest.js.`,
      `Promoted to a consulting role to provide guidance and strategic direction for the project beyond my internship tenure.`,
    ],
    skills: [
      'Python',
      'TypeScript',
      'React.js',
      'Django',
      'SQLite',
      'Docker',
      'Oracle Cloud',
      'GitHub Actions',
      'Jest.js',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Levy Lab',
    link: 'https://www.levylab.org',
    start: new Date('2022-12-01'),
    end: new Date('2023-05-01'),
    bullets: [
      `Customized and maintained a fork of Grafana, the database visualization software, involving full-stack development with Go and React.js to integrate TimescaleDB tailored and optimized features.`,
      `Wrote GitHub Actions pipelines to automate building and deployment of Docker images for AWS EC2 containers.`,
      `Served as a webmaster, handling DNS management, SSL certificate installation, and web hosting for the lab's websites.`,
    ],
    skills: ['Go', 'TypeScript', 'React.js', 'TimescaleDB', 'Docker', 'AWS', 'GitHub Actions'],
  },
];

for (let i = 0; i < experience.length; i++) {
  for (let j = 0; j < experience[i].bullets.length; j++) {
    experience[i].bullets[j] = experience[i].bullets[j].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    experience[i].bullets[j] = experience[i].bullets[j].replace(/\*(.*?)\*/g, '<em>$1</em>');
    experience[i].bullets[j] = experience[i].bullets[j].replace(/_(.*?)_/g, '<em>$1</em>');
  }
}

export { experience };