module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'javascripts/app.js': /(src\/|node_modules\/)/
      }
    }
  },

  paths: {
    watched: [
      "src"
    ],
    public: "app/assets/"
  },
  plugins: {
    babel: { presets: ['es2015', 'react', 'stage-2'], pattern: /\.(jsx?)$/ }
  }
}
