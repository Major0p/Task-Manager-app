import React from 'react'
import Header from './Header'
import Input from './Input'
// import Inspire from './Inspire'
import Axios from './Axios'


export default function Page() {
    return (
        <>
            <div className="page">
                <Header />
                <Input />
                {/* <Inspire/> */}
                <Axios />
            </div>
        </>
    )
}
