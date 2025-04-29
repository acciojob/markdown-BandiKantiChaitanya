import React, { useState } from 'react'
import '../styles/App.css'

function MarkdownEditor() {
    let [load,setLoad]=useState(false)
    let [text,setText]=useState()
    function handleText(e){
        const newText = e.target.value;
        setLoad(true)
        
        setTimeout(() => {
            setText(newText)
            setLoad(false)
        }, 500);
    }
  return (
    <>
        <div className="container">
        <div className="textarea">
            <textarea name="text" id="text" style={{width:'100%',
                height:'100%',overflow:'hidden',margin:'0px',
                padding:'0px',border:'none',backgroundColor:'#8fcbdf'}} onChange={(e)=>{handleText(e)}} />
        </div>

        <div className="preview" >
          {load ? <h1>Loading...</h1> : <h1>{text}</h1>}
        </div>
        
        </div>
    </>
  )
}

export default MarkdownEditor