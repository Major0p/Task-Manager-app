import React, { useState, useEffect } from 'react'
import { FcApprove, FcPlus, FcDeleteDatabase } from 'react-icons/fc'

export default function Input() {
    const [task, settask] = useState('');
    
    const data = (event) => {
        settask(event.target.value);
    }
    const arr = [];
    const [item, setitem] = useState(arr);
    const add = () => {
        setitem(() => {
            return [...item, task];
        });
        settask('');
    }
    const clean = () => {
        setitem(arr);
    }
    useEffect(() => {
        localStorage.setItem('liset', JSON.stringify(item));
    }, [item])
    const delet = (index) => {
        console.log(index);
        const updateditems = item.filter((elem, newindex) => {
            console.log(elem);
            return index !== newindex;
        });
        setitem(updateditems);
    }

    
    return (
        <>
            <div className='input-field'>
                <span>
                    <input type="text" className="input" placeholder='Task' value={task} onChange={data} />
                    <button className="add-btn" type='button' onClick={add} ><FcPlus/></button>
                    <button className="clean-btn" type='button' onClick={clean}><FcDeleteDatabase/></button>
                </span>
            </div>
            <div className="task-field">
                <div className='taskes'>
                    {item.map((items, index) => {
                        return (
                            <>
                                
                                <span key={index}><ul>  <li>{items} <button className="done-btn" type='button' onClick={() => { delet(index) }}><FcApprove/></button></li>
                                </ul>
                                </span>
                            </>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

