import yargs from 'yargs';

//区分开发环境和线上环境

const args=yargs.option('production',{
    //区分production是否输入，这个选项是默认值
    boolean:true,
    //默认值
    default:false,
    describe:'min all scripts'
})

.option('watch',{
    boolean:true,
    default:false,
    describe:'watch all files'
})

.option('verbose',{
    boolean:true,
    default:false,
    describe:'log'
})

.option('sourcemaps',{
    describe:'force the creation of sroucemaps'
})

.option('port',{
    string:true,
    default:8080,
    describe:'server port'
})

.argv

export default args;