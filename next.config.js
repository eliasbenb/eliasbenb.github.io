/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/assets/resume.pdf',
        permanent: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/eliasbenb',
        permanent: false,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/eliasbenb',
        permanent: false,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/eliasbenb',
        permanent: false,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/users/641234002023415808',
        permanent: false,
      },
      {
        source: '/mail',
        destination: 'mailto:me@elias.eu.org',
        permanent: false,
      },
    ];
  },
};
