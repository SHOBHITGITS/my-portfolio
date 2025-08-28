import React, { useState } from "react";
import { motion } from "framer-motion";

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWinner = (newBoard) => {
        for (let pattern of winningPatterns) {
            const [a, b, c] = pattern;
            if (
                newBoard[a] &&
                newBoard[a] === newBoard[b] &&
                newBoard[a] === newBoard[c]
            ) {
                return newBoard[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);

        const gameWinner = checkWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
        } else if (!newBoard.includes(null)) {
            setWinner("draw");
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    };

    return (
        <div name="play game">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center py-10
                 bg-gradient-to-b from-gray-900 via-black to-gray-900
                 text-white shadow-2xl backdrop-blur-lg"
        >
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-6 text-transparent
                   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
            >
                🎮 Tic Tac Toe
            </motion.h2>

            {winner ? (
                <motion.p
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-xl mb-4 font-semibold text-green-400 drop-shadow-lg"
                >
                    {winner === "draw" ? "🤝 It's a Draw!" : `🏆 ${winner} Wins!`}
                </motion.p>
            ) : (
                <p className="text-lg mb-4 text-gray-300">
                    Next Player:{" "}
                    <span className={isXNext ? "text-red-400" : "text-blue-400"}>
            {isXNext ? "❌ X" : "⭕ O"}
          </span>
                </p>
            )}

            <div className="grid grid-cols-3 gap-3">
                {board.map((cell, index) => (
                    <motion.button
                        key={index}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => handleClick(index)}
                        className="w-20 h-20 flex items-center justify-center
                       bg-gradient-to-br from-gray-800 to-gray-900
                       text-3xl font-extrabold rounded-xl
                       shadow-lg border border-gray-700
                       hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
                       transition duration-300"
                    >
            <span
                className={`${
                    cell === "X"
                        ? "text-red-400 drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]"
                        : cell === "O"
                            ? "text-blue-400 drop-shadow-[0_0_10px_rgba(0,0,255,0.7)]"
                            : ""
                }`}
            >
              {cell}
            </span>
                    </motion.button>
                ))}
            </div>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={resetGame}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600
                   text-white font-semibold rounded-lg shadow-lg
                   hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition"
            >
                🔄 Restart Game
            </motion.button>
        </motion.div>
        </div>
    );
};

export default TicTacToe;
