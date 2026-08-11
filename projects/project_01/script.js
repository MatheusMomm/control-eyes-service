function createBoard() {
    const board = document.querySelector(".board");

    for (let c = 1; c <= 8; c++ ){
        for(let i = 1; i <=8; i++) {
            let square = document.createElement("div");
            square.classList.add("square");
            board.appendChild(square);

            if((c + i) % 2 == 0) {
                square.classList.add("light")
            }
        }
    }
}

createBoard()