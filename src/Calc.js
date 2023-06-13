import React, { useState } from 'react'
import './calc.css'
import { Link } from 'react-router-dom';

function Calc() {
    const [num, setNum] = useState('');
    const [fval, setFval] = useState('');
    const [act, setAct] = useState('');

    const btnClick = (e) => {
        if (e === 'AC') {
            setNum('');
        }
        else {
            if (e === '.') {
                if (num.includes(".")) {
                    setNum(num);
                    console.log('hello')
                }
                else {
                    setNum(num + '.');
                }
            }
            else {

                setNum(num + e);
            }
        }

    }
    const btnAction = (a) => {
        setFval(parseFloat(num));
        setNum('');
        setAct(a);

    }
    const result = () => {
        if (act === '+') {
            setNum(fval + parseFloat(num));
        }
        else if (act === '-') {
            setNum(fval - parseFloat(num));
        }
        else if (act === '*') {
            setNum(fval * parseFloat(num));
        }
        else if (act === '/') {
            setNum(fval / parseFloat(num));
        }
    }
    return (
        <div>
            <Link to={'/TicTacToe'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>TicTacToe</Link>
            <Link to={'/NumPuzzle'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>NumPuzzle</Link>
            <Link to={'/'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>Calc</Link>
            <div className='container'>
                <input value={num} disabled className='screen' />
                <div className='calc-btns'>

                    <input type="button" value={"1"} className="btn" onClick={() => { btnClick(1) }} />
                    <input type="button" value={"2"} className="btn" onClick={() => { btnClick(2) }} />
                    <input type="button" value={"3"} className="btn" onClick={() => { btnClick(3) }} />
                    <input type="button" value={"+"} className="btn" onClick={() => { btnAction('+') }} />

                    <input type="button" value={"4"} className="btn" onClick={() => { btnClick(4) }} />
                    <input type="button" value={"5"} className="btn" onClick={() => { btnClick(5) }} />
                    <input type="button" value={"6"} className="btn" onClick={() => { btnClick(6) }} />
                    <input type="button" value={"-"} className="btn" onClick={() => { btnAction('-') }} />

                    <input type="button" value={"7"} className="btn" onClick={() => { btnClick(7) }} />
                    <input type="button" value={"8"} className="btn" onClick={() => { btnClick(8) }} />
                    <input type="button" value={"9"} className="btn" onClick={() => { btnClick(9) }} />
                    <input type="button" value={"/"} className="btn" onClick={() => { btnAction('/') }} />

                    <input type="button" value={"."} className="btn" onClick={() => { btnClick('.') }} />
                    <input type="button" value={"0"} className="btn" onClick={() => { btnClick(0) }} />
                    <input type="button" value={"="} className="btn" onClick={result} />
                    <input type="button" value={"*"} className="btn" onClick={() => { btnAction('*') }} />
                    <input type="button" value={"AC"} className="btn" onClick={() => { btnClick('AC') }} />
                    <input type="button" className="btn" disabled style={{ backgroundColor: ' rgb(24, 22, 22)' }} />
                    <input type="button" className="btn" disabled style={{ backgroundColor: ' rgb(24, 22, 22)' }} />
                    <input type="button" className="btn" disabled style={{ backgroundColor: ' rgb(24, 22, 22)' }} />



                </div>
            </div>
        </div>
    )
}

export default Calc;