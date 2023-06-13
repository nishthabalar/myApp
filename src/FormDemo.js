import React, { useEffect, useState } from 'react'

function FormDemo() {
    const [data, setData] = useState([
        {
            name: 'Nishtha',
            email: 'nishtha@email.com',
            contact: '98989898989898',
            gender: 'Female',
            hobby: ['Dancing'],
            select: 'India',
        },
        {
            name: 'Nishtha1',
            email: 'nishtha@email.com',
            contact: '98989898989898',
            gender: 'Female',
            hobby: ['Reading'],
            select: 'USA',
        },
        {
            name: 'Nishtha2',
            email: 'nishtha@email.com',
            contact: '98989898989898',
            gender: 'Male',
            hobby: ['Music'],
            select: 'UK',
        }
    ])

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [hobby, setHobby] = useState([]);
    const [select, setSelect] = useState('');

    const btnSubmit = () => {
        let obj = {
            name: name,
            email: email,
            contact: contact,
            gender: gender,
            hobby: hobby,
            select: select,

        }
        if (isEdit) {
            var temp = [...data];
            temp[editId] = obj;
            setData(temp);

        } else {
            setData([...data, obj]);
        }

        setName('');
        setEmail('');
        setContact('');
        setGender('');
        setHobby('');
        setSelect('');
    }
    const btnEdit = (ind) => {
        // console.log(index);
        setIsEdit(true);
        setEditId(ind);
        const rowData = data[ind];
        // console.log(rowData)
        setName(rowData.name);
        setEmail(rowData.email);
        setContact(rowData.contact);
        setGender(rowData.gender);
        setHobby(rowData.hobby);

    }
    const checkBox = (e) => {
        if (e.target.checked) {
            if (!hobby.includes(e.target.value)) {
                setHobby([...hobby, e.target.value])
            }
        }
        else {
            var temp = [...hobby];
            var index = temp.indexOf(e.target.value);
            if (index != -1) {
                temp.splice(index, 1);
            }
            setHobby(temp);
        }
    }
    const deleteItem = (ind) => {
        const tempData = data.filter((itmes, k) => {
            return k != ind;
        })
        setData(tempData)

    }
    useEffect(() => {
        console.log(hobby)
    }, [hobby])

    return (
        <>

            <table border={1} width={'50%'}>
                <tr>
                    <td>Name:</td>
                    <td><input type='text' value={name} onChange={(e) => { setName(e.target.value) }} /></td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} /></td>
                </tr>
                <tr>
                    <td>Contact:</td>
                    <td><input type='text' value={contact} onChange={(e) => { setContact(e.target.value) }} /></td>
                </tr>
                <tr>
                    <td>Gender:</td>
                    <td> <input type='radio' name='gender' value="Female" onChange={(e) => { setGender(e.target.value) }} checked={gender == "Female"} />Female
                        <input type='radio' name='gender' value="Male" onChange={(e) => { setGender(e.target.value) }} checked={gender == "Male"} />Male</td>
                </tr>
                <tr>
                    <td>Hobby:</td>
                    <td>
                        <input type='checkbox' name='hobby' value="Dancing" onChange={checkBox} checked={hobby.includes("Dancing")} />Dancing
                        <input type='checkbox' name='hobby' value="Reading" onChange={checkBox} checked={hobby.includes("Reading")} />Reading
                        <input type='checkbox' name='hobby' value="Music" onChange={checkBox} checked={hobby.includes('Music')} />Music
                    </td>
                </tr>
                <tr>
                    <td>Country:</td>
                    <td><select onChange={(e) => { setSelect(e.target.value) }}>
                        <option value="" >---Country---</option>

                        <option value="India" selected={select == "India"}>India</option>
                        <option value="USA" selected={select == "USA"}>USA</option>
                        <option value="UK" selected={select == "UK"}>UK</option>
                        <option value="Korea" selected={select == "Kprea"}>Korea</option>
                        <option value="France" selected={select == "France"}>France</option>

                    </select> </td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type='button' onClick={btnSubmit} value="save" /></td>
                </tr>

            </table>
            <table border={1} width={"50%"}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Gender</th>
                    <th>Hobby</th>
                    <th>Country</th>
                </tr>
                {
                    data.map((nis, ind) => {
                        return (
                            <tr>
                                <td>{nis.name}</td>
                                <td>{nis.email}</td>
                                <td>{nis.contact}</td>
                                <td>{nis.gender}</td>
                                <td>{nis.hobby}</td>
                                <td>{nis.select}</td>
                                <td>
                                    <input type='button' value={'edit'} onClick={() => { btnEdit(ind) }} />
                                </td>
                                <td>
                                    <input type='button' value={'delete'} onClick={() => { deleteItem(ind) }} />
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default FormDemo