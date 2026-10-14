class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const saves = {}
        for (let str of strs) {
            const strOrdered = str.split("").sort().join('')
            
            if (!saves[strOrdered]) {
                saves[strOrdered] = [str]
            } else {
                saves[strOrdered].push(str)
            }
        }
        
        return Object.values(saves);
    }
}
