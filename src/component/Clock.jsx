import React ,{useState,useEffect} from 'react'
import { FcClock } from 'react-icons/fc'

export default function Clock() {
    const [t,sett]=useState(' loading..');
    const [d, setd] = useState(' loading..');
    useEffect(() => {
        setInterval(() => {
            let time = new Date();
            let strt = time.toLocaleTimeString();
            let strd = time.toLocaleDateString();
            setd(strd);
            sett(strt);
        }, 1000);
    }, [t]);
    return (
        <>
            <span className='time'> <FcClock/> {t} - {d}</span>
        </>
    )
}
