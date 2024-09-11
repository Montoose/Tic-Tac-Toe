// This function handles the game board for the game.
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

// This function creates a player for the game.
function player () {
    let mark = 1;
    
    const makeMove = (mark) => {
        let playerChoice = Number(prompt("Make your move: (0-8"));
        switch (playerChoice) {
            case 0:
                if (gameBoard.board[0][0] == 0) gameBoard.board[0][0] = mark;
                break;
            case 1:
                if (gameBoard.board[0][1] == 0) gameBoard.board[0][1] = mark;
                break;
            case 2:
                if (gameBoard.board[0][2] == 0) gameBoard.board[0][2] = mark;
                break;
            case 3:
                if (gameBoard.board[1][0] == 0) gameBoard.board[1][0] = mark;
                break;
            case 4:
                if (gameBoard.board[1][1] == 0) gameBoard.board[1][1] = mark;
                break;
            case 5:
                if (gameBoard.board[1][2] == 0) gameBoard.board[1][2] = mark;
                break;
            case 6:
                if (gameBoard.board[2][0] == 0) gameBoard.board[2][0] = mark;
                break;
            case 7:
                if (gameBoard.board[2][1] == 0) gameBoard.board[2][1] = mark;
                break;
            case 8:
                if (gameBoard.board[2][2] == 0) gameBoard.board[2][2] = mark;
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

function roundController (player1, player2) {
    player1.makeMove();
    checkWinner()
    player2.makeMove();
}





gameBoard.setup();
let matthew = new player();
let ricky = new computer();
matthew.makeMove();
ricky.makeMove();