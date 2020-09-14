/*
 * @Author: sam.li
 * @Date: 2020-09-11 23:03:21
 * @LastEditors: sam.li
 * @LastEditTime: 2020-09-11 23:06:26
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let maxLen = l1.length >= l2.length ? l1.length : l2.length;
    let result = new Array(maxLen);
};

console.log(addTwoNumbers([2,4,3],[5,6,4]))