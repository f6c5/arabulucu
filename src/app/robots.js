const robots = () => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://arabulucu.com/sitemap.xml",
  };
};

export default robots;
