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

    const checkForWinner = () => {
        // Check for row winner
        for (i = 0; i < rows; i++) {
            let a = board[i][0];
            let b = board[i][1];
            let c = board[i][2];
            if (a == b && a == c && a != 0) return true;
        }

        // Check for column winner
        for (i=0; i < rows; i++) {
            let a = board[0][i];
            let b = board[1][i];
            let c = board[2][i];
            if (a == b && a == c && a != 0) return true;
        }

        // Check for diagonal winner
        if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != 0) return true;
        else if (board[2][0] == board[1][1] && board[2][0] == board[0][2] && board[2][0] != 0) return true;

        return false;
    }

    return {
        board,
        setup,
        reset,
        checkForWinner,
    }
})();

// This function creates a player for the game.
function player () {
    
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
    let firstPlayerScore = 0;
    let secondPlayerScore = 0;
    let player1 = new player();
    let player2 = new player();
    let activePlayer = player1;
    let turn = 0;

    const playRound = () => {
        while (turn < 10) {
            activePlayer.makeMove(1);
            if (gameBoard.checkForWinner() == true) {
                console.log("This happned");
                break;
            }
            else {
                turn++
                this.setActivePlayer;
            } 
        }
    }
    
    const setActivePlayer = () => {
        if (activePlayer == player1) activePlayer = player2;
        else activePlayer = player1;
    }

    const resetScore = () => {
        firstPlayerScore = 0;
        secondPlayerScore = 0;
        turn = 0;
        winner = false;
    }

    return {
        playRound,
        resetScore,
        setActivePlayer,
    }
})

gameBoard.setup();


let game = gameController();
game.playRound();
