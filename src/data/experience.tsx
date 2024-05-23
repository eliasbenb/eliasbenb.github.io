let experience = [
  {
    title: 'Software Engineer',
    company: 'University of Pittsburgh',
    link: 'https://dbmi.pitt.edu',
    start: new Date('2023-05-01'),
    end: undefined,
    bullets: [
      `Scripted **SAS** and **SQL** programs for the _{PCORNET}_ database to output annual statistical summaries on their **30,000,000+** patients.`,
      `Engineered a tool for **5,000,000+** _{PCORNET}_ patients across **hundreds** of hospitals to better understand their conditions/medications.`,
      `Desgined a service using **React.js** and **FastAPI** for _{UPMC}_ hospital to predict dangerous patient transitions with **machine learning**.`,
      `Developed a **REST API** with **request queuing** to query various **locally-run language models** in lieu of a shared GPU environment.`,
      `Deployed a **Linux** server for research on large medical data with **Dockerized** and user-isolated **Jupyter** and **RStudio** environments.`,
      `Wrote **Bash** programs to automatically create and deploy custom **Docker** environments, eliminating over **90%** of manual build time.`,
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Center for Analytical Approaches to Social Innovation',
    link: 'https://www.caasi.pitt.edu',
    start: new Date('2023-05-01'),
    end: new Date('2023-09-01'),
    bullets: [
      `Migrated the _{412CONNECT}_ project to a new **Django**, **React.js**, and **SQLite** stack, handling backend, frontend, and database design.`,
      `Developed an analytics admin dashboard within _{412CONNECT}_, featuring powerful querying, chart/table graphics, and data exporting.`,
      `Introduced **CI/CD** pipelines with **GitHub Actions** for building, testing, and **AWS** deployment, saving **90+** minutes of daily dev time.`,
      `Was promoted to a consulting role to provide guidance and strategic direction for the project beyond my internship tenure.`,
    ],
  },
  {
    title: 'Software Developer',
    company: 'Levy Lab',
    link: 'https://www.levylab.org',
    start: new Date('2022-12-01'),
    end: new Date('2023-05-01'),
    bullets: [
      `Refactored **SQL** tables containing **billions** of rows, reducing the database's size by over **40%**, optimizing indexing performance.`,
      `Maintained a _Grafana_ fork to integrate features for **TimescaleDB** querying which involved development with **Go** and **React.js**.`,
      `Wrote **CI/CD** pipelines to eliminate **100%** of the daily build and deployment time with **AWS**, **Docker**, and **Github Actions**.`,
    ],
  },
  {
    title: 'Help Desk Technician',
    company: 'University of Pittsburgh',
    link: 'https://www.technology.pitt.edu',
    start: new Date('2022-10-01'),
    end: new Date('2022-12-01'),
    bullets: [
      `Operated a help desk phone line, providing support for software, hardware, and non-technical questions, averaging **20+** calls a day.`,
      `Assisted callers with varying levels of digital literacy and ages to reach solutions to both technical and non-technical issues.`,
    ],
  },
  {
    title: 'Founding Engineer',
    company: 'libDrive',
    link: 'https://github.com/libDrive',
    start: new Date('2020-11-01'),
    end: new Date('2022-03-01'),
    bullets: [
      `Created a media library indexer and web interface using technologies such as **React.js**, **Flask**, **MongoDB**, and _Google Drive's_ API.`,
      `Used concepts such as **threading**, **request queuing**, and **asynchrony** to serve high volume requests efficiently and performantly.`,
      `Directed and coordinated the team efforts of _{LIBDRIVE}'s_ successor, _{DESTER}_, which was born from the open-source community's interest.`,
      `Collaboratively contributed to _{DESTER}'s_ frontend development with **React.js** and the initial **backend migration** from **Python** to **Go**.`,
      `Amassed over **100,000** downloads, **hundreds** of stars/forks on GitHub, a community of over **300** members, and **six** contributors.`,
    ],
  },
];

const DICTIONARY = {
  '{PCORNET}': 'PCORnet',
  '{UPMC}': 'UPMC',
  '{412CONNECT}': '412Connect',
  '{LIBDRIVE}': 'libDrive',
  '{DESTER}': 'Dester',
  '{NAHAR}': 'Nahar',
};

for (let i = 0; i < experience.length; i++) {
  for (let j = 0; j < experience[i].bullets.length; j++) {
    experience[i].bullets[j] = experience[i].bullets[j].replace(
      /\*\*(.*?)\*\*/g,
      '<strong>$1</strong>',
    );
    experience[i].bullets[j] = experience[i].bullets[j].replace(/\*(.*?)\*/g, '<em>$1</em>');
    experience[i].bullets[j] = experience[i].bullets[j].replace(/_(.*?)_/g, '<em>$1</em>');

    for (const key in DICTIONARY) {
      experience[i].bullets[j] = experience[i].bullets[j].replace(
        key,
        DICTIONARY[key as keyof typeof DICTIONARY],
      );
    }
  }
}

export { experience };
