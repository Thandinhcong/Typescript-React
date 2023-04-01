import { useEffect, useState } from "react";
import Square from "./square";

const Board = ({ children }) => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(null);
    const [message, setMessage] = useState("");
    const [timer, setTimer] = useState(3)
    const handlePlay = (position) => {
        if (gameOver) { // kiểm tra nếu gameOver là true thì không cho chơi tiếp
            return;
        }
        const newGame = game.map((i, index) => {
            if (index === position) {
                return player ? "X" : "O";
            }
            return i;
        })
        setGame(newGame);
        setPlayer(!player);

        if (checkWiner()) { // kiểm tra xem có người chơi nào chiến thắng không
            setGameOver(true); // nếu có, cập nhật biến gameOver thành true
            setWinner(checkWiner());
            setMessage(`Player ${checkWiner()} chiến thắng!`);
        } else if (!newGame.includes(null)) {
            setGameOver(true);
            setMessage("hòa rồi!");
        } else {
            setMessage("");
        }
    }

    const winList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    const checkWiner = () => {
        for (let i = 0; i < winList.length; i++) {
            const [p1, p2, p3] = winList[i];
            if (game[p1] === game[p2] && game[p2] === game[p3] && game[p3] === game[p1]) {
                return game[p1];
            }
        } return null;
    }
    const resetGame = () => {
        setGame([null, null, null, null, null, null, null, null, null]);
        setPlayer(true);
        setGameOver(false);
        setWinner(null);
        setMessage("");
    }
    const handleAutoPlay = () => {
        const emptyGame = game.map((square, index) => square ? null : index).filter(item => item != null)
        const position = emptyGame[Math.floor(Math.random() * emptyGame.length)];
        //  console.log(position);
        handlePlay(position)
    }
    useEffect(() => {
        if (timer < 0) {
            handleAutoPlay();
            setTimer(3)
        }
        // bất đồng bộ
        const interval = setInterval(() => {
            setTimer(timer - 1)
        }, 1000)
        return () => clearInterval(interval);
    }, [timer])
    return (
        <div>
            <div>
                <h2>Winner : {checkWiner()}</h2>
                <h2>Time : {timer}</h2>
                {gameOver && (
                    <div>
                        <h2>{message}</h2>
                        <button onClick={resetGame} style={{ color: "red" }}>Play Again</button>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-3 gap-3">
                <Square value={game[0]} position={0} handlePlay={handlePlay} />
                <Square value={game[1]} position={1} handlePlay={handlePlay} />
                <Square value={game[2]} position={2} handlePlay={handlePlay} />
                <Square value={game[3]} position={3} handlePlay={handlePlay} />
                <Square value={game[4]} position={4} handlePlay={handlePlay} />
                <Square value={game[5]} position={5} handlePlay={handlePlay} />
                <Square value={game[6]} position={6} handlePlay={handlePlay} />
                <Square value={game[7]} position={7} handlePlay={handlePlay} />
                <Square value={game[8]} position={8} handlePlay={handlePlay} />
            </div>
            <button onClick={resetGame} style={{ color: "red" }}>chơi lại</button>
        </div>

    )
}
export default Board;