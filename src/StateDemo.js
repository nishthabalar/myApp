import React, { useState } from 'react'


function StateDemo() {
    const [txt, setTxt] = useState('');
    const [txt1, settxt1] = useState('');
    const [txt2, settxt2] = useState('');
    const btnClick = () => {
        setTxt(parseFloat(txt1) + parseFloat(txt2))
    }
    const btnClick2 = () => {
        setTxt(parseFloat(txt1) - parseFloat(txt2))
    }
    const btnClick3 = () => {
        setTxt(parseFloat(txt1) * parseFloat(txt2))
    }
    const btnClick4 = () => {
        setTxt(parseFloat(txt1) / parseFloat(txt2))
    }
    return (
        <div>
            <h1>{txt1}</h1>
            <h1>{txt2}</h1>
            <h1>{txt}</h1>
            <input type='text' value={txt1} onChange={(e) => { settxt1(e.target.value) }} />
            <input type='text' value={txt2} onChange={(e) => { settxt2(e.target.value) }} />
            <input type='button' value={'Addition'} onClick={btnClick} />
            <input type='button' value={'Substrate'} onClick={btnClick2} />
            <input type='button' value={'Multiply'} onClick={btnClick3} />
            <input type='button' value={'Divide'} onClick={btnClick4} />
        </div>
    );
}

export default StateDemo