module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['client/service/**/*.js', 'client/query/query.js', 'client/query/app.js'],
        dest: 'client/dist/concat.js'
      }
    },

    // mochaTest: {
    //   test: {
    //     options: {
    //       reporter: 'spec'
    //     },
    //     src: ['test/**/*.js']
    //   }
    // },

    nodemon: {
      dev: {
        files: {
          src: 'server.js'
        }
      }
    },

    uglify: {
      target: {
        files: {
          'client/dist/uglify.js': 'client/dist/concat.js',
        }
      }
    },

    jshint: {
      files: [
        'client/query/**/*.js',
        'client/service/**/*.js'
      ],
      options: {
        force: 'false',
        jshintrc: '.jshintrc',
        ignores: [
          'client/bower_components/**/*.js',
          'node_modules/**/*.js'
        ]
      }
    },

    cssmin: {
      files: {
        src: 'client/styles/*.css',
        dest: 'client/dist/style.css'
      }
    },

    watch: {
      scripts: {
        files: [
          'client/query/**/*.js', 'client/service/**/*.js'
        ],
        tasks: [
          'jshint',
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'client/styles/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {

        'heroku': {
          command: 'git push heroku master'

      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  // grunt.registerTask('test', [
  //   'mochaTest'
  // ]);

  grunt.registerTask('nodes', [
    'nodemon'
  ]);

  grunt.registerTask('build', [
    'jshint',
    'concat',
    'uglify',
    'cssmin',
  ]);

  grunt.registerTask('heroku',['shell:heroku']);
  grunt.registerTask('upload', function(n) {
    if(grunt.option('prod')) {
      grunt.task.run([ 'heroku' ]);
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });
  grunt.registerTask('concatFile', [
    'concat'
  ]);
  grunt.registerTask('deploy', [
    'build',
    'upload'
  ]);


};
