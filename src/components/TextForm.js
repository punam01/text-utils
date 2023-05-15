import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick=()=>{
        setText(text.toUpperCase());
    }
    const handleLoClick=()=>{
        setText(text.toLowerCase());
    }
    const handleTrClick=()=>{
        setText(text.trim());
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleClearClick=()=>{
        setText("");
    }
    const handleCopyClick=()=>{
        var copyText=document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }
    const handleSpaceClick=()=>{
        var txt=text.split(/[ ]+/);
        setText(txt.join(" "));
    }  
    const handleDownloadClick=()=>{
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(new Blob([blob]));
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.setAttribute(
                    'download',
                    `SamplePDF.pdf`,
                );

                alink.click();
            })
        })
    } 
    const [text,setText]=useState("");
    return (
    <>
    <div className="mb-3">
        <label htmlFor="myBox" className="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} id="myBox" rows="10" onChange={handleOnChange}></textarea>
    </div>
    <button type="button" className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
    <button type="button" className="btn btn-primary m-2" onClick={handleLoClick}>Lowercase</button>
    <button type="button" className="btn btn-primary" onClick={handleTrClick}>Trim</button>
    <button type="button" className="btn btn-primary m-2" onClick={handleClearClick}>Clear</button>
    <button type="button" className="btn btn-primary " onClick={handleCopyClick}>Copy</button>
    <button type="button" className="btn btn-primary m-2" onClick={handleSpaceClick}>Remove Space</button>
    <button type="button" className="btn btn-primary " onClick={handleDownloadClick}>Download PDF</button>
    <h2 className="my-4">Text Summary</h2>
    <p>{text.split(" ").length} words {text.length}  characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2 className='my-3'>Preview</h2>
    <p className='text-start container p-4 border' >{text}</p>
    </>
  ) 
}

TextForm.propTypes={
    heading:PropTypes.string.isRequired
}
TextForm.defaultProps={
    heading:'Enter text to analyze'
}