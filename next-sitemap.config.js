const siteUrl = process.env.SITE_URL || "https://sight-hub.example.com";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/api/*"],
};