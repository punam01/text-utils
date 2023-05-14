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
    const handleSpCharClick=()=>{
        setText(text);
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
    <button type="button" className="btn btn-primary " onClick={handleTrClick}>Trim</button>
    <button type="button" className="btn btn-primary m-2" onClick={handleTrClick}>Trim</button>
    <button type="button" className="btn btn-primary " onClick={handleSpCharClick}>Trim</button>
    </>
  ) 
}

TextForm.propTypes={
    heading:PropTypes.string.isRequired
}
TextForm.defaultProps={
    heading:'Enter text to analyze'
}