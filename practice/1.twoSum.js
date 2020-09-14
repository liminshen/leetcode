/*
 * @Date: 2020-09-11 22:16:15
 * @LastEditors: sam.li
 * @LastEditTime: 2020-09-11 22:57:06
 */
// 一个数组，求预期和。
/**
 * @Author: sam.li
 * @Date: 2020-09-11 22:35:41
 * @Description: 
 * @param {
 *  
 * }
 * @return [
 * firstIndex,
 * secondIndex
 * ] 函数注释
 */
function twoSum (range, targe) {
    if (nums.length < 2) return -1
    let surplus = 0;
    let result = [];
    let tplIndex = 0;
    let len = range.length;
    while (len !== 0 && result.length < 2) {
        len = range.length;
        surplus = targe - range[0];
        result[0] = tplIndex;
        tplIndex++;
        range = range.slice(1);
        let secondNumIndex = range.indexOf(surplus);
        if (secondNumIndex !== -1) {
            result.push(secondNumIndex+tplIndex);
        }
    }
    return result;
}

// console.log(twoSum([1,2,3,4,5,7],7));

var twoSum = function(nums, target) {
    if (nums.length < 2) return -1
    let tplArr = [];
    let result;
    for( let i = 0; i < nums.length; i ++) {
        let tpl = nums[i];
        tplArr = nums.slice(i+1);
        let sectionIdex = tplArr.indexOf(target - tpl);
        if ( sectionIdex !== -1) {
            result = [i, sectionIdex+i+1]
            break;
        }
    }
    return result;
}


/**
 * @Author: sam.li
 * @Date: 2020-09-11 22:55:50
 * @Description: 暴力拆解法。
 * @param {
 * nums: 数据源数组，
 * target: 求和结果
 * } 入参
 * @return {
 *  [i,j]
 * } 函数注释
 */
var twoSum = function(nums, target) {
    if(nums.length < 2) return -1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            return [i, j]
        }
        }
    }
    return -1;
}



console.log(twoSum([3,2,4],6));