module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        'Gruntfile.js', 
        'app.js', 'routes/*.js',  // Node/Express
        'lib/*.js',               // Back-end services
        'data/*.json',            // Data
        'public/js/*.js',         // Front-end (AngularJS)
        'test/*Spec.js'           // Front-end Jasmine Tests
      ]
    },
    bowercopy: {
      options: {
        srcPrefix: 'bower_components'
      },
      vendorDeps: {
        options: {
          destPrefix: 'public/vendor'
        },
        files: {
          'bootstrap.min.css': '/bootstrap/dist/css/bootstrap.min.css',
          'font-awesome.min.css': '/font-awesome/css/font-awesome.min.css',
          'angular.min.js': '/angularjs/angular.min.js',
          'angular-route.min.js': '/angular-route/angular-route.min.js',
          'angular-resource.min.js': '/angular-resource/angular-resource.min.js',
          'angular-animate.min.js': '/angular-animate/angular-animate.min.js',
          // not directly referenced in app, but still required
          'angular.min.js.map': '/angularjs/angular.min.js.map',
          'angular-route.min.js.map': '/angular-route/angular-route.min.js.map',
          'angular-resource.min.js.map': '/angular-resource/angular-resource.min.js.map',
          'angular-animate.min.js.map': '/angular-animate/angular-animate.min.js.map',
          // font-awesome dependency on fonts being in a certain location is not awesome
          '../fonts/fontawesome-webfont.woff': '/font-awesome/fonts/fontawesome-webfont.woff',
          '../fonts/fontawesome-webfont.woff2': '/font-awesome/fonts/fontawesome-webfont.woff2',
          '../fonts/fontawesome-webfont.ttf': '/font-awesome/fonts/fontawesome-webfont.ttf',
          // same for bootstrap
          '../fonts/glyphicons-halflings-regular.woff': 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
          '../fonts/glyphicons-halflings-regular.woff2': 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
          '../fonts/glyphicons-halflings-regular.ttf': 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'
        }
      }
    },
    jasmine: {
      customTemplate: {
        src: 'public/js/*.js',
        options: {
          specs: 'test/*Spec.js',
          vendor: [
            'bower_components/angularjs/angular.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-resource/angular-resource.min.js',
            'bower_components/angular-animate/angular-animate.min.js'
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
                  functions: 50
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
  grunt.loadNpmTasks('grunt-bowercopy'); 

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'bowercopy:vendorDeps', 'jasmine', 'watch']);

};