/*
 * @Author: sam.li
 * @Date: 2020-09-14 09:37:52
 * @LastEditors: sam.li
 * @LastEditTime: 2020-09-14 09:43:38
 */
/**
 * @Author: sam.li
 * @Date: 2020-09-14 09:38:33
 * @Description: 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    if (s.length === 1) return 1;
    let tplStr = '';
    let maxLen = 0;
    for (let i = 0 ; i < s.length; i++) {
        let equalStrIndex = tplStr.indexOf(s[i]);
        if (equalStrIndex !== -1) {
            tplStr = tplStr.slice(equalStrIndex +1 );
        }
        tplStr += s[i]
        tplStrLen = tplStr.length
        maxLen = tplStrLen > maxLen ? tplStrLen : maxLen
    }
    return maxLen
};
