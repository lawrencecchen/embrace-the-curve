const withImages = require('next-images');
const sitemap = require('nextjs-sitemap-generator');

module.exports = withImages();

sitemap({
  baseUrl: 'embracethecurve.org',
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'public/',
});
