import React, { useState } from 'react'

export default function Textform(props) {
    const HANDLEcLICK = () => {
        let newtext = text.toUpperCase();
        settext(newtext);

    }

    const HANDLEONCHANGE = (event) => {
        settext(event.target.value);
    }

    const HANDLEtolo= () =>{
        let newtext = text.toLowerCase();
        settext(newtext);
    }
    const [text, settext] = useState('');

    return (
        <>
            <h3>{props.HEADING}</h3>
            <div className='mb-3'>
                <textarea className="form-control w-5" id="textarea" rows="8" value={text} onChange={HANDLEONCHANGE}></textarea>
                <button className='btn btn-primary mx-1' onClick={HANDLEcLICK}>CONVERT TOUPPERCASE</button>
                <button className='btn btn-primary mx-1' onClick={HANDLEtolo}>CONVERT TOUPPERCASE</button>
            </div>

            <div className="container my-2">
                <h3>YOUR TEXT SUMMARY</h3>
                <p>{text.split(" " ).length } words and {text.length}  chracters </p>
                <p>TIME TAKEN TO READ THIS TEXT</p>
                <p>{0.008 * text.split("" ).length}</p>
                <h3>PREVIEW</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
