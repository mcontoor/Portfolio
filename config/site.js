module.exports = {
    title: `Portfolio`,
    description: `A website to showcase Meghna's profile as a Full Stack Developer`,
    author: `@mcontoor`,
    siteUrl: `https://meghna-contoor.netlify.app`,
    githubApiToken: process.env.GITHUB_API_TOKEN,
    githubApiQuery: `query {
        viewer {
          name
          avatarUrl
          isHireable
          resourcePath
          repositories {
              totalCount
          }
        }
      }`,
      githubApiVariables: {
        number_of_repos: 12,
      },
};
