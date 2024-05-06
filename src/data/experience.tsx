let experience = [
  {
    title: 'Software Engineer',
    company: 'DBMI PITT',
    link: 'https://dbmi.pitt.edu',
    start: new Date('2023-05-01'),
    end: undefined,
    bullets: [
      `Scripted **SAS** and **SQL** programs that generate statistical summaries of patient electronic health records in the _PCORnet_ database, a national medical network of **hundreds** of hospitals and over **30 million** patients yearly.`,
      `Designed a service for PCORnet patients to query or chart drug, condition, and demographic data with **React.js** and **FastAPI**.`,
      `Deployed a high-performance **Linux** server for research on large medical datasets packaged with locked-down **Jupyter** and **RStudio** environments in user-isolated and GPU-enabled **Docker** containers.`,
      `Desgned a dashboard with **React.js** for care coordinators to predict possible prescription errors during cross-center patient transitions with **machine learning**`,
      `Developed a **REST API** for querying various self-hosted **AI** language models optimized with block-wise quantization and request queuing to manage high GPU loads in a shared environment.`,
    ],
    skills: [
      'Python',
      'TypeScript',
      'R',
      'React.js',
      'FastAPI',
      'SAS',
      'SQL',
      'PyTorch',
      'Jupyter',
      'Docker',
    ],
  },
  {
    title: 'Software Engineering Consultant ← Full Stack Developer Intern',
    company: 'CAASI',
    link: 'https://www.caasi.pitt.edu',
    start: new Date('2023-05-01'),
    end: new Date('2023-09-01'),
    bullets: [
      `Migrated the _412Connect_ project, a service to educate and inform the public about local businesses, to an entirely new stack and was responsible for backend, frontend, and database design in a **Django**, **React.js**, and **SQLite** stack.`,
      `Developed a **user analytics** and tracking system for _412Connect_ featuring a dashboard, charts, graphs, and search/filtering.`,
      `Introduced new DevOps pipelines, including CI/CD building, testing, and deployment to **AWS** using **GitHub Actions**.`,
      `Was promoted to a **consulting** role to provide guidance and strategic direction for the project beyond my internship tenure.`,
    ],
    skills: [
      'Python',
      'TypeScript',
      'React.js',
      'Django',
      'SQLite',
      'Docker',
      'AWS',
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
      `Refactored **SQL** tables containing billions of rows in a **TimescaleDB** database to optimize indexing.`,
      `Maintained _Grafana_ fork, which involved full-stack development with **Go** and **React.js** to integrate features for **TimescaleDB**.`,
      `Wrote **GitHub Actions** pipelines to automate building and deployment of Docker images for **AWS** EC2 containers.`,
      `Served as a webmaster, handling DNS management, SSL certificate installation, and web hosting for the lab's websites.`,
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
