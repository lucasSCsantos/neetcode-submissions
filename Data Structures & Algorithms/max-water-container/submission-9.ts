class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let leftPointer = 0;
        let rightPointer = heights.length - 1;
        let maximun = 0;
        while (leftPointer !== rightPointer) {
            const first = heights[leftPointer];
            const last = heights[rightPointer];

            const area = Math.abs(rightPointer - leftPointer) * Math.min(last, first);
            maximun = Math.max(area, maximun)

            if (first > last) {
                rightPointer -= 1;
            } else {
                leftPointer += 1;
            }
        }

        return maximun;
    }
}
