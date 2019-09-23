/*
 * @Author: Mr Jiang.Xu 
 * @Date: 2019-06-11 10:25:23 
 * @Last Modified by: Mr Jiang.Xu
 * @Last Modified time: 2019-06-13 21:03:59
 * @desc 测试函数执行的时间
 */

const testArr = require('./testArr');
module.exports = async function getFnRunTime(fn) {
    let len = testArr.length;
    let startTime = Date.now(), endTime;
    let result = await fn(testArr);
    endTime = Date.now();
    console.log(result);
    console.log(`total time:${endTime-startTime}ms`,
                'test array\'length:' + len, 
                result.length
    );
}