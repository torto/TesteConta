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
          "public/css/style.css": "public/css/less/style.less" // destination file and source file
        }
      }
    },
    watch: {
      dist: {
        files: ['!public/css/style.css', '!public/bower_components/**/*', 'public/**/*'],
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
