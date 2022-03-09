import React from 'react'
import Clock from './Clock'
import { FcTodoList } from 'react-icons/fc'

export default function Header() {
    return (
        <div className='header'>
            <span htmlFor="" className='logo'>Task Manager</span><span>  <FcTodoList/></span>
            <br />
            <span className='slog'>Be productive</span>
            <Clock/>
        </div>
    )
}
