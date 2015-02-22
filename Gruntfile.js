module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 
        'app.js', 'routes/*.js', // Node/Express
        'public/js/*.js', // Angular
        'test/*Spec.js' // Tests
        ]
    },
    jasmine: {
      customTemplate: {
        src: 'public/js/*.js',
        options: {
          specs: 'test/*Spec.js',
          vendor: [
            'bower_components/angularjs/angular.min.js',
            'bower_components/angular-route/angular-route.min.js'
          ],
          helpers: [
            'bower_components/angular-mocks/angular-mocks.js'
          ],
          keepRunner: true,
          template: require('grunt-template-jasmine-istanbul'),
          templateOptions: {
              coverage: 'bin/coverage/coverage.json',
              report: 'bin/coverage',
              thresholds: {
                  lines: 75,
                  statements: 75,
                  branches: 75,
                  functions: 90
              }
          }
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'jasmine']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine'); 
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'jasmine', 'watch']);

};