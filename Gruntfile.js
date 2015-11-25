module.exports = function(grunt) {
  grunt.initConfig({
    less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "public/css/dist/style.css": "public/css/less/style.less" // destination file and source file
          }
        }
      },
      watch: {
        /*styles: {
          files: ['public/css/less/*.less'], // which files to watch
          tasks: ['less'],
          options: {
            nospawn: true
          }
        },*/
        dist: {
        files: ['public/**/*', '!public/css/dist/**/*', '!public/bower_components/**/*'],
        tasks: ['less'],
        options: {
          livereload: true,
        }
      }
      }
    });

  grunt.registerTask('watch', ['watch']);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

};
