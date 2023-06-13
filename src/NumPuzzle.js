import React, { useState, useEffect } from 'react'
import './NumPuzzle.css'
import { Link } from 'react-router-dom'


function NumPuzzle() {
    const [b1, setB1] = useState(3)
    const [b2, setB2] = useState(6)
    const [b3, setB3] = useState(8)
    const [b4, setB4] = useState('')
    const [b5, setB5] = useState(2)
    const [b6, setB6] = useState(4)
    const [b7, setB7] = useState(1)
    const [b8, setB8] = useState(7)
    const [b9, setB9] = useState(5)
    const [win, setWin] = useState('')

    useEffect(() => {
        winner();
    }, [b1, b2, b3, b4, b5, b6, b7, b8, b9])
    const change = (e) => {
        if (win === '') {

            if (e.target.value == b1) {
                if (b2 === '') {
                    setB2(e.target.value);
                    setB1('');
                }
                else if (b4 === '') {
                    setB4(e.target.value);
                    setB1('');
                }
                // winner();
            }
            if (e.target.value == b2) {
                if (b1 === '') {
                    setB1(e.target.value);
                    setB2('');
                }
                else if (b3 === '') {
                    setB3(e.target.value);
                    setB2('');
                }
                else if (b5 === '') {
                    setB5(e.target.value);
                    setB2('');
                }
                // winner();
            }
            if (e.target.value == b3) {
                if (b2 === '') {
                    setB2(e.target.value);
                    setB3('');
                }
                else if (b6 === '') {
                    setB6(e.target.value);
                    setB3('');
                }
                // winner();
            }
            if (e.target.value == b4) {
                if (b1 === '') {
                    setB1(e.target.value);
                    setB4('');
                }
                else if (b5 === '') {
                    setB5(e.target.value);
                    setB4('');
                }
                else if (b7 === '') {
                    setB7(e.target.value);
                    setB4('');
                }
                // winner();
            }
            if (e.target.value == b5) {
                if (b2 === '') {
                    setB2(e.target.value);
                    setB5('');
                }
                else if (b4 === '') {
                    setB4(e.target.value);
                    setB5('');
                }
                else if (b6 === '') {
                    setB6(e.target.value);
                    setB5('');
                }
                else if (b8 === '') {
                    setB8(e.target.value);
                    setB5('');
                }
                // winner();
            }
            if (e.target.value == b6) {
                if (b9 === '') {
                    setB9(e.target.value);
                    setB6('');
                }
                else if (b3 === '') {
                    setB3(e.target.value);
                    setB6('');
                }
                else if (b5 === '') {
                    setB5(e.target.value);
                    setB6('');
                }
                // winner();
            }
            if (e.target.value == b7) {
                if (b4 === '') {
                    setB4(e.target.value);
                    setB7('');
                }
                else if (b8 === '') {
                    setB8(e.target.value);
                    setB7('');
                }
                // winner();
            }
            if (e.target.value == b8) {
                if (b9 === '') {
                    setB9(e.target.value);
                    setB8('');
                }
                else if (b7 === '') {
                    setB7(e.target.value);
                    setB8('');
                }
                else if (b5 === '') {
                    setB5(e.target.value);
                    setB8('');
                }
                // winner();
            }
            if (e.target.value == b9) {
                if (b6 === '') {
                    setB6(e.target.value);
                    setB9('');
                }
                else if (b8 === '') {
                    setB8(e.target.value);
                    setB9('');
                }
                // winner();
            }

        }
    }
    const winner = () => {
        if (b1 === '1' && b2 === '2' && b3 === '3' && b4 === '4' && b5 === '5' && b6 === '6' && b7 === '7' && b8 === '8' && b9 === '') {
            setWin('You Won');
            console.log('hello');
        }
    }
    function myReset() {
        // document.getElementById('display').innerHTML = '';//
        setWin('');
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, '']
        shuffle(arr);

    }
    function shuffle(array) {
        let current = array.length, rand;

        while (current != 0) {

            rand = Math.floor(Math.random() * current);
            current--;

            var temp;
            temp = array[current];
            array[current] = array[rand];
            array[rand] = temp;


            // for (var i = 0; i < 9; i++) {
            //     document.getElementsByTagName('input')[i].value = array[i];
            //     // if (document.getElementsByTagName('input')[i].value == '') {
            //     //     // document.getElementsByTagName('input')[i].style.backgroundColor = '#EDF1D6';
            //     // }
            //     // else {
            //     //     document.getElementsByTagName('input')[i].style.backgroundColor = '#609966';
            //     // }
            // }
        }
        setB1(array[0]);
        setB2(array[1]);
        setB3(array[2]);
        setB4(array[3]);
        setB5(array[4]);
        setB6(array[5]);
        setB7(array[6]);
        setB8(array[7]);
        setB9(array[8]);
    }
    return (
        <div>
            <div style={{ margin: '20px' }}>
                <Link to={'/TicTacToe'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>TicTacToe</Link>
                <Link to={'/NumPuzzle'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>NumPuzzle</Link>
                <Link to={'/'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>Calc</Link>
            </div>
            <div id="puzzle_container">
                <input type="button" value={b1} className="puzzle_block" id="b1" onClick={change} />
                <input type="button" value={b2} className="puzzle_block" id="b2" onClick={change} />
                <input type="button" value={b3} className="puzzle_block" id="b3" onClick={change} />
                <input type="button" value={b4} className="puzzle_block" id="b4" onClick={change} />
                <input type="button" value={b5} className="puzzle_block" id="b5" onClick={change} />
                <input type="button" value={b6} className="puzzle_block" id="b6" onClick={change} />
                <input type="button" value={b7} className="puzzle_block" id="b7" onClick={change} />
                <input type="button" value={b8} className="puzzle_block" id="b8" onClick={change} />
                <input type="button" value={b9} className="puzzle_block" id="b9" onClick={change} />
            </div>
            {/* <input type='button' value={'Reset'} onClick={myReset} /> */}
            <input type='text' value={win} readOnly style={{ backgroundColor: 'transparent' }} />
            <button onClick={myReset} style={{ postion: "relative", top: '500px', left: '570px' }}>Restart</button>

        </div>
    )
}

export default NumPuzzle