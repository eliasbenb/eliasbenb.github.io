let experience = [
  {
    title: 'Senior Research Programmer',
    company: 'PCORI',
    link: 'https://www.pcori.org',
    start: new Date('2023-05-01'),
    end: undefined,
    bullets: [
      `Built scripts to generate profile reports and statistical summaries of the PCORI network's medical data using SAS and SQL.`,
      `Trained machine learning models on patient medical data to preemptively detect signs of certain types of kidney disease.`,
      `Developed and deployed tools to query and visualize the PCORI network's medical data with React.js, FastAPI, and Plot.ly.`,
    ],
    skills: [
      'Python',
      'JavaScript',
      'React.js',
      'FastAPI',
      'PostgreSQL',
      'Oracle SQL',
      'SAS',
      'TensorFlow',
    ],
  },
  {
    title: 'Software Engineering Consultant',
    company: 'CAASI',
    link: 'https://www.412connect.org',
    start: new Date('2023-05-01'),
    end: undefined,
    bullets: [
      `Rebuilt CAASI's 412Connect project from end-to-end with heavy involvement in backend programming using Django, SQLite database modeling, website wireframing, story map planning, and frontend design using React.js and TailwindCSS.`,
      `Implemented a versatile user tracking system outfitted with an admin dashboard to query and visualize the tracking data easily.`,
      `Handled all DevOps with the development of CI/CD testing workflows and build pipelines through GitHub Actions.`,
      `Was promoted to a consulting position where I provided guidance and direction for the project past my internship period.`,
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
    ],
  },
  {
    title: 'Software Developer',
    company: 'Levy Lab',
    link: 'https://www.levylab.org',
    start: new Date('2022-12-01'),
    end: new Date('2023-05-01'),
    bullets: [
      `Maintained a fork of the open-source database visualizer _Grafana_ and tailored it to the lab's needs; this involved full-stack software development with Go and React.js to include new features such as TimescaleDB-tailored and optimized functions.`,
      `Developed build pipelines using GitHub Actions to publish Docker images used during production on an AWS EC2 instance.`,
      `Remodeled the lab's large, decade-old production TimescaleDB database tables to optimize SQL query speed and efficiency.`,
      `Acted as a webmaster for the lab's many sites; this involved DNS management, SSL certificate installation, and web hosting.`,
    ],
    skills: ['Go', 'TypeScript', 'React.js', 'TimescaleDB', 'Docker', 'AWS', 'GitHub Actions'],
  },
  {
    title: 'Help Desk Technician',
    company: 'University of Pittsburgh',
    link: 'https://www.technology.pitt.edu/about-us',
    start: new Date('2022-10-01'),
    end: new Date('2022-12-01'),
    bullets: [
      `Operated a help desk phone line, where I provided support for software, hardware, and non-technical issues.`,
      `Documented all incoming calls, emails, and live chats with detailed solutions and troubleshooting steps taken to solve issues.`,
    ],
    skills: ['Salesforce', 'Avaya'],
  },
];

for (let i = 0; i < experience.length; i++) {
  for (let j = 0; j < experience[i].bullets.length; j++) {
    experience[i].bullets[j] = experience[i].bullets[j].replace(
      /\*\*(.*?)\*\*/g,
      '<strong>$1</strong>',
    );
    experience[i].bullets[j] = experience[i].bullets[j].replace(/\*(.*?)\*/g, '<em>$1</em>');
    experience[i].bullets[j] = experience[i].bullets[j].replace(/_(.*?)_/g, '<em>$1</em>');
  }
}

export { experience };
