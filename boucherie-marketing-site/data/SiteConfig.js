module.exports = {
  siteTitle: "EB Web Development", // Site title.
  siteTitleShort: "EB Web Dev", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Boucher Web Development Toronto", // Alternative site title for SEO.
  siteLogo: "/logos/EB_logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://vagr9k.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-material-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "JAMstack (Javascript, API, Markdown), Wordpress and Shopify platform development in Toronto, ON", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Material User", // Username to display in the author segment.
  userTwitter: "BoucherieDev", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Toronto, Canada", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Boucherie/boucherie-marketing-site",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/BoucherieDev",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:emi.boucher@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Emily Boucher" // Copyright string for the footer of the website and RSS feed.
};
