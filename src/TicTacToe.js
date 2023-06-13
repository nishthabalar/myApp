import React, { useState } from 'react'
import './tictactoe.css'
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';

function TicTacToe() {
    // var c = 0;
    const [box, setBox] = useState(["", "", "", "", "", "", "", "", ""]);
    const [turn, setTurn] = useState("X");
    const [winner, setWinner] = useState("");
    const myFunction = (i) => {
        // console.log(e.target.value);
        // if (e.target.value === '') {
        //     if (c % 2 === 0) {
        //         e.target.value = 'X';
        //     }
        //     else {
        //         e.target.value = '0';

        //     }
        //     c++;
        // }
        // alert('hello')
        if (box[i] === '' && winner === "") {
            if (turn == 'X') {
                box[i] = "X";
                setTurn("O");
                // alert('hello')
            }
            else {
                box[i] = "O";
                setTurn("X");
            }

        }
        if (box[0] === 'X' && box[1] === 'X' && box[2] === 'X' || box[3] === 'X' && box[4] === 'X' && box[5] === 'X' || box[6] === 'X' && box[7] === 'X' && box[8] === 'X' || box[0] === 'X' && box[3] === 'X' && box[6] === 'X' || box[1] === 'X' && box[4] === 'X' && box[7] === 'X' || box[2] === 'X' && box[5] === 'X' && box[8] === 'X' || box[0] === 'X' && box[4] === 'X' && box[8] === 'X' || box[2] === 'X' && box[4] === 'X' && box[6] === 'X') {
            setWinner("X Won");
        }
        else if (box[0] === 'O' && box[1] === 'O' && box[2] === 'O' || box[3] === 'O' && box[4] === 'O' && box[5] === 'O' || box[6] === 'O' && box[7] === 'O' && box[8] === 'O' || box[0] === 'O' && box[3] === 'O' && box[6] === 'O' || box[1] === 'O' && box[4] === 'O' && box[7] === 'O' || box[2] === 'O' && box[5] === 'O' && box[8] === 'O' || box[0] === 'O' && box[4] === 'O' && box[8] === 'O' || box[2] === 'O' && box[4] === 'O' && box[6] === 'O') {
            setWinner("O Won");

        }
    }
    const reStart = () => {
        // location.reload()
        setBox(["", "", "", "", "", "", "", "", ""]);
        setWinner("");
    }

    return (
        <div>
            <Link to={'/TicTacToe'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>TicTacToe</Link>
            <Link to={'/NumPuzzle'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>NumPuzzle</Link>
            <Link to={'/'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>Calc</Link>
            <div id="box">
                <input type="text" id="b1" value={box[0]} onClick={() => { myFunction(0) }} readOnly />
                <input type="text" id="b2" value={box[1]} onClick={() => { myFunction(1) }} readOnly />
                <input type="text" id="b3" value={box[2]} onClick={() => { myFunction(2) }} readOnly />
                <input type="text" id="b4" value={box[3]} onClick={() => { myFunction(3) }} readOnly />
                <input type="text" id="b5" value={box[4]} onClick={() => { myFunction(4) }} readOnly />
                <input type="text" id="b6" value={box[5]} onClick={() => { myFunction(5) }} readOnly />
                <input type="text" id="b7" value={box[6]} onClick={() => { myFunction(6) }} readOnly />
                <input type="text" id="b8" value={box[7]} onClick={() => { myFunction(7) }} readOnly />
                <input type="text" id="b9" value={box[8]} onClick={() => { myFunction(8) }} readOnly />
            </div>
            <input type='text' value={winner} readOnly style={{ backgroundColor: 'transparent', marginTop: '80px' }} />
            <button onClick={reStart} style={{ postion: "relative", top: '130px', left: '570px' }}>Restart</button>
            {/* <input type='button' value={"Restart"} onClick={reStart} /> */}

        </div>
    )
}

export default TicTacToe;