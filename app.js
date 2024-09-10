const gameBoard = (function () {
    let board = [];
    rows = 3;
    columns = 3;

    const setup = () => {
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                board[i].push(0);
            }
        }
        console.log(board);
    }

    const reset = () => {
        board = [];
    }

    return {
        board,
        setup,
        reset,
    }
})();

function player () {
    console.log("Placeholder");
}

const computer = (function () {
    console.log("Placeholder");
})();

const gameLogicController = (function () {

})

gameBoard.setup();