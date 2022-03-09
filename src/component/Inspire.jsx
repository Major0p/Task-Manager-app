import React, {useState , useEffect} from 'react'

export default function Inspire() {
    // const [data,setdata]=useState('');
    fetch("https://motivational-quotes1.p.rapidapi.com/motivation", {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-rapidapi-host": "motivational-quotes1.p.rapidapi.com",
            "x-rapidapi-key": "8dd7e650ddmshb6f60a1b1cd0c5cp1b1989jsnce3927ef98d3"
        },
        "body": {
            "key1": "value",
            "key2": "value"
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
    return (
        <>
            <div className="inspire">
              {/* <p>{data}</p> */}
            </div>
        </>
    )
}
