import React from "react"
import './Note.css'
const Note = (props)=>{
    const handleDelete = () => {
        props.deleteNote(props.noteKey);
    };
    return(
        <React.Fragment>
            <div className="notediv">
                <div className="headerdiv">
                <h3 className="title">{props.title}</h3>
                <div className="buttons">
                    {/* <button className="collapse_btn">V</button> */}
                    <button onClick={handleDelete} className="delete_btn">X</button>
                </div>
                
                </div>
                <div className="contentdiv">
                <textarea readOnly>{props.content}</textarea>
                </div>
                <div className="footerdiv">
                <p className="date">{props.date}</p>
                <p className="time">{props.time.slice(0,5)}</p>
               
            </div>
            </div>
        </React.Fragment>
    )
}
export default Note