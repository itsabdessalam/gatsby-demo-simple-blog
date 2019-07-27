module.exports = {
  plugins: [`gatsby-theme-simple-blog`],
  siteMetadata: {
    url: "https://abdessalam.dev",
    title: "Simple blog demo",
    author: "Abdessalam",
    description: "Simple blog theme starter",
    locale: "en",
    socialLinks: [
      {
        text: "Twitter",
        link: "https://twitter.com/gatsbyjs"
      },
      {
        text: "GitHub",
        link: "https://github.com/gatsbyjs"
      }
    ],
    navLinks: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "About",
        link: "/about"
      },
      {
        text: "Contact",
        link: "/contact"
      }
    ],
    themeConfig: {
      themeSwitcher: true,
      showNavLinks: true,
      loadMorePosts: false,
      postsIncrementBy: 5
    }
  }
};
