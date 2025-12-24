import { createContext } from "react";

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // prefix is the array's first word
    // traverse the array of strs
    // string check every element if string contains  the prefix pass
    // if it doesnt remove the last char from the prefix and check again
    // the same string
    // if string contains  the prefix hold on to it keep removing chars from
    // prefix until  prefix is ""  then return ""

        if (strs.length === 0) {
        return ""
    }
        const prefix = strs[0];
        console.log(prefix);
    };

    //     if (strs.length === 0) {
    //     return ""
    // }
    // const prefix = strs[0];
    // for (let str of strs) {
    //     if (!str.includes(prefix)) {
    //         prefix.slice(0, prefix.length - 1)
    //         while (prefix) {
    //             if (!str.includes(prefix)) {
    //                 prefix.slice(0, prefix.length - 1)
    //             }
    //             else{
    //                 break;
    //             }
    //         }
    //     }
    //     if(!prefix){
    //         return prefix
    //     }