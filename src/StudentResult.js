import React, { useState } from 'react'
import './generalStyle.css';

function StudentResult() {
    const [data, setData] = useState([
        {

            name: 'Nishtha',
            roll: '01',
            email: 'nishtha@gmail.com',
            contact: '989898',
            math: '90',
            sci: '70',
            eng: '80',
            social: '89',
            total: '329'
        }

    ])
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [math, setMath] = useState('');
    const [sci, setsci] = useState('');
    const [eng, setEng] = useState('');
    const [social, setSocial] = useState('');
    const [total, setTotal] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState('');

    const btnSubmit = () => {
        // setTotal(parseFloat(eng) + parseFloat(math) + parseFloat(sci) + parseFloat(social));
        let obj = {
            name: name,
            roll: roll,
            email: email,
            contact: contact,
            math: math,
            sci: sci,
            eng: eng,
            social: social,
            total: total
        }
        // setData([...data, obj]);
        if (isEdit) {
            var temp = [...data];
            temp[editId] = obj;
            setData(temp);

        } else {
            setData([...data, obj]);
        }

        setName('');
        setRoll('');
        setContact('');
        setEmail('');
        setMath('');
        setsci('');
        setSocial('');
        setTotal('');
        setEng('');
    }

    const btnEdit = (ind) => {
        setIsEdit(true);
        setEditId(ind);
        const idData = data[ind];
        setName(idData.name);
        setRoll(idData.roll);
        setEmail(idData.email);
        setContact(idData.contact);
        setMath(idData.math);
        setsci(idData.sci);
        setSocial(idData.social);
        setEng(idData.eng);
        setTotal(idData.total);

    }
    const deleteItem = (ind) => {

    }
    return (
        <>
            <table >
                <tr>
                    <td style={{ padding: 10 }}>
                        Name:
                    </td>
                    <td>
                        <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
                    </td>
                    <td width={50}></td>
                    <td style={{ padding: 10 }}>
                        Roll No:
                    </td>
                    <td>
                        <input type='tel' value={roll} onChange={(e) => { setRoll(e.target.value) }} />
                    </td>
                </tr>

                <tr>
                    <td style={{ padding: 10 }}>
                        Contact:
                    </td>
                    <td>
                        <input type='tel' value={contact} onChange={(e) => { setContact(e.target.value) }} />
                    </td>
                    <td width={50}></td>
                    <td style={{ padding: 10 }}>
                        Email:
                    </td>
                    <td>
                        <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </td>
                </tr>

                <tr style={{ height: 30 }}></tr>
                <tr>
                    <td colSpan={2}><hr style={{ width: 285 }} /></td>
                    <td> SUBJECTS </td>
                    <td colSpan={2}><hr style={{ width: 295 }} /></td>
                </tr>
                <tr style={{ height: 30 }}></tr>

                <tr>
                    <td style={{ padding: 10 }}>
                        English:
                    </td>
                    <td>
                        <input type='tel' value={eng} onChange={(e) => { setEng(e.target.value) }} />
                    </td>
                    <td width={50}></td>
                    <td style={{ padding: 10 }}>
                        Maths:
                    </td>
                    <td>
                        <input type='tel' value={math} onChange={(e) => { setMath(e.target.value) }} />
                    </td>
                </tr>

                <tr>
                    <td style={{ padding: 10 }}>
                        Science:
                    </td>
                    <td>
                        <input type='tel' value={sci} onChange={(e) => { setsci(e.target.value) }} />
                    </td>
                    <td width={50}></td>
                    <td style={{ padding: 10 }}>
                        Social Sci:
                    </td>
                    <td>
                        <input type='tel' value={social} onChange={(e) => { setSocial(e.target.value) }} />
                    </td>
                </tr>

                <tr height={30}></tr>
                <tr>
                    <td colSpan={2}>
                    </td>
                    <td>
                        <button onClick={btnSubmit} style={{ backgroundColor: 'transparent', border: 'none', outline: '1px black solid', padding: '5px 10px' }}>SUBMIT</button>
                    </td>
                    <td colSpan={2}>
                    </td>
                </tr>
                <tr height={30}></tr>

            </table >

            <table border={1} width={"100%"} style={{ margin: 5 }}>
                <tr>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Maths</th>
                    <th>English</th>
                    <th>Science</th>
                    <th>Social Sci</th>
                    {/* <th>Total</th> */}

                </tr>
                {
                    data.map((nis, ind) => {
                        return (
                            <tr>
                                <td>{nis.name}</td>
                                <td>{nis.roll}</td>
                                <td>{nis.email}</td>
                                <td>{nis.contact}</td>
                                <td>{nis.math}</td>
                                <td>{nis.eng}</td>
                                <td>{nis.sci}</td>
                                <td>{nis.social}</td>
                                {/* <td>{nis.total}</td> */}
                                <td>
                                    <input type='button' value={'Edit'} onClick={() => { btnEdit(ind) }} />
                                </td>
                                <td>
                                    <input type='button' value={'Delete'} onClick={() => { deleteItem(ind) }} />
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default StudentResult