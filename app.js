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
    
    const makeMove = () => {
        let playerChoice = Number(prompt("Make your move: (0-8"));
        switch (playerChoice) {
            case 0:
                if (gameBoard.board[0][0] != 1) gameBoard.board[0][0] = 1;
                break;
            case 1:
                if (gameBoard.board[0][1] != 1) gameBoard.board[0][1] = 1;
                break;
            case 2:
                if (gameBoard.board[0][2] != 1) gameBoard.board[0][2] = 1;
                break;
            case 3:
                if (gameBoard.board[1][0] != 1) gameBoard.board[1][0] = 1;
                break;
            case 4:
                if (gameBoard.board[1][1] != 1) gameBoard.board[1][1] = 1;
                break;
            case 5:
                if (gameBoard.board[1][2] != 1) gameBoard.board[1][2] = 1;
                break;
            case 6:
                if (gameBoard.board[2][0] != 1) gameBoard.board[2][0] = 1;
                break;
            case 7:
                if (gameBoard.board[2][1] != 1) gameBoard.board[2][1] = 1;
                break;
            case 8:
                if (gameBoard.board[2][2] != 1) gameBoard.board[2][2] = 1;
                break;
        }
        console.log(gameBoard.board);
    }

    return {
        makeMove,
    }
}

function computer () {
    const { makeMove } = player();

    return { makeMove };
}

const gameController = (function () {
    let activePlayer = true;

    const switchActivePlayer = () => {
        if (activePlayer = true) activePlayer = false;
    }

    return {
        switchActivePlayer,
    }
})

gameBoard.setup();

let matthew = new player();
let ricky = new computer();
matthew.makeMove();
ricky.makeMove();