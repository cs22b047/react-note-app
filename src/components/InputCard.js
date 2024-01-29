import React, { useState } from "react"
import "./InputCard.css"
const InputCard = (props)=>{
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    function addNote(event){
        event.preventDefault()
        props.newNote(title,content)
        console.log(content)
        setTitle('')
        setContent('')
    }
    return (
                <form onSubmit={addNote} className="new_note_form">
                        
                    <div className="input_form_heading">Add a new note</div>                   
                    <input type="text" id="title" name="title" value={title} placeholder="Title" onChange={(event)=>{setTitle(event.target.value)}} required/>
                    <textarea type="text" id="content" name="content" value={content} placeholder="Content..." onChange={(event)=>{setContent(event.target.value)}} />
                    <div className="add_btn_div"><button type="submit" disabled={title.length===0}>+</button></div>
                                        
                </form>
    )
}
export default InputCard;