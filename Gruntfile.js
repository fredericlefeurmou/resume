module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Compiles Sass to CSS
    sass: {
      dist: {
        files: {
          'main.css': 'main.scss'
        }
      }
    },

    watch: {
      css: {
        files: 'main.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
  });

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);
};
