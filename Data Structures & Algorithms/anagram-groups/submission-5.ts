class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const saves = {}
        strs.forEach((str) => {
            const strOrdered = str.split("").sort().join('')
            
            if (!saves[strOrdered]) {
                saves[strOrdered] = [str]
            } else {
                saves[strOrdered].push(str)
            }
        })
        return Object.values(saves);
    }
}
