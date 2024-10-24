let experience = [
  {
    title: 'Software Engineer',
    company: 'University of Pittsburgh Biomedical Informatics',
    link: 'https://dbmi.pitt.edu',
    start: new Date('2023-05-01'),
    end: undefined,
    bullets: [
      `Designed a service for researchers and **13,000,000+** _PaTH_ network patients to assess drug-disease interactions and pharmacogenetics by leveraging _**SAS**_ for data consolidation and statistical analysis, _**FastAPI**_ for backend services, and _**React.js**_ for the user interface.`,
      `Built an **AI-powered** web app using _**Next.js**_ to explore natural product-drug interactions through knowledge graphs and data tables.`,
      `Prototyped a tool for _UPMC_ hospital to identify dangerous patient care transitions with **machine learning**, _**FastAPI**_, and _**React.js**_.`,
      `Architected a locked-down, _HIPAA_-compliant _**Linux**_ server infrastructure for containerized compute sessions using _**Docker**_, scaled to **100+** users, with plans of cross-departmental adoption for its security and customization capabilities in research/academic settings.`,
      `Implemented automation for environment customization and creation, reducing time spent on manual processes by **95%+** with _**Bash**_.`,
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Center for Analytical Approaches to Social Innovation',
    link: 'https://www.caasi.pitt.edu',
    start: new Date('2023-05-01'),
    end: new Date('2023-09-01'),
    bullets: [
      `Migrated _412Connect_ to a _**Django**_ and _**React.js**_ stack, leading full-stack development for improved scalability and performance. `,
      `Built an analytics admin dashboard with _**Django**_ and _**Chart.js**_, enabling advanced data querying, visualization, and exporting.`,
      `Established CI/CD pipelines using _**GitHub Actions**_, streamlining and automating build, test, and deployment processes.`,
      `Promoted to a **consulting** role to advise on strategic direction, long-term goals, and tech stack optimization beyond my internship.`,
    ],
  },
  {
    title: 'Software Developer',
    company: 'Levy Lab',
    link: 'https://www.levylab.org',
    start: new Date('2022-12-01'),
    end: new Date('2023-05-01'),
    bullets: [
      `Refactored _**SQL**_ tables containing **billions** of rows, reducing database size by over **40%** and improving indexing performance.`,
      `Enhanced a custom _Grafana_ fork by developing features in _**Go**_ and _**React.js**_ to support timeseries data querying and visualization.`,
      `Developed CI/CD pipelines using _**AWS**_, _**Docker**_, and _**GitHub Actions**_, fully automating daily builds and deployments.`,
    ],
  },
  {
    title: 'Help Desk Technician',
    company: 'University of Pittsburgh',
    link: 'https://www.technology.pitt.edu',
    start: new Date('2022-10-01'),
    end: new Date('2022-12-01'),
    bullets: [
      `Operated a help desk phone line, providing support for software, hardware, and non-technical questions, averaging **15+** calls a day.`,
      `Assisted callers of varying digital literacy to resolve technical and non-technical issues, achieving a satisfaction rating of **~100%**.`,
    ],
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
