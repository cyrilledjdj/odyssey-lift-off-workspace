// Helper for combining webpack config objects

const { merge } = require('webpack-merge');

module.exports = (config, context) => {
  return merge(config, {
    // overwrite values here
    mode: 'production', //Always needed because of dependencies on react-markdown
  });
};
