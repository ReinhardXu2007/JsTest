'use strict';



String.prototype.trim = function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
module.exports = function (grunt) {
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
      jasmine: {
        customTemplate: {
          src: 'src/**/*.js',
          options: {
            specs: 'spec/*.js',
            helpers: 'spec/*Helper.js',
          }
        }
      }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);


};
