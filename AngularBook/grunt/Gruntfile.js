//查看所有grunt配置:https://github.com/gruntjs/grunt-contrib-uglify
module.exports = function (grunt) {
    //配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: 'src/*.js',
                tasks: ['uglify']
            }
        },
        uglify: {
            // build:{
            //     src:'src/<%=pkg.name%>.js',
            //     dest:'build/<%= pkg.name %>.min.js'
            // }
            all_min: {
                files: [{
                    src: ["src/view.js", "!src/notview.js"],
                    dest: "build/",
                }, {
                    src: ["lib/framework.js", "!lib/work.js"],
                    dest: "build/"
                }]
            }
        }
    });
    //加载插件
    //默认任务
    //为了设置一个配置，需要让Grunt载入我们想要使用的所有插件的npm任务。由于这里正在使用uglify任务，因此需要让Grunt载入grunt-contrib-uglify插件任务
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.register('default', ['uglify']);
    grunt.registerTask('package', ['uglify:all_min']);
    grunt.registerTask('default', ['package']);
}
