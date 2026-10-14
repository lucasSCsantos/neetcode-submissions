class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let isValid = true;

        const validateLine = (board: string[][]) => {
            let isValidLine = true;

            for(const line of board) {
                console.log(line, line.length, new Set(line).size)
                if (line.filter((cell) => cell !== '.').length !== new Set(line.filter((cell) => cell !== '.')).size) {
                    isValidLine = false
                }
            }

            return isValidLine;
        }

        const validateColumn = (board: string[][]) => {
            let isValidColumn = true;

            for(let columnIndex = 0; columnIndex < board[0].length; columnIndex++) {
                const column: string[] = [];
                for(const line of board) {
                    column.push(line[columnIndex])
                }
                if (column.filter((cell) => cell !== '.').length !== new Set([...column].filter((cell) => cell !== '.')).size) {
                    isValidColumn = false;
                }
            }

            return isValidColumn;
        }

        const validateBoxes = (board: string[][]) => {
            let boxes = [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ]

            board.forEach((line, lineIndex) => {
                let add = 0;
                if (lineIndex > 5) {
                    add = 6
                } else if (lineIndex > 2) {
                    add = 3
                }

                line.forEach((cell, index) => {
                    if (index % 3 === 0) {
                        boxes[index / 3 + add].push(cell) 
                        boxes[index / 3 + add].push(line[index+1]) 
                        boxes[index / 3 + add].push(line[index+2]) 
                    } 
                })
            })

            return validateLine(boxes)
        }

        const isValidLine = validateLine(board);
        const isValidColumn = validateColumn(board);
        const isValidBox = validateBoxes(board);

        console.log(isValidLine, isValidColumn, isValidBox)

        return isValidLine && isValidColumn && isValidBox
    }
}
