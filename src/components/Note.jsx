import React, { useState } from "react";
import './Notestyle.css';
import { Link ,useNavigate} from "react-router-dom";

function Note() {
    const [tittle, setittle] = useState("");
    const [content, setcontent] = useState("");
    const [data, setdata] = useState([]);
    const navigate = useNavigate();

   
    
    
    const createnote = (e) => {
        
        const t = new Date();
        const time = t.getDate() + "-" + t.getMonth() + "-" + t.getFullYear() + " " + t.getHours() + ":" + t.getMinutes();
        let id = data.length + 1;
        if (tittle && content) {
            additem({ id, tittle, content, time });
            navigate("/")
        }
        
        }
    const additem = (newitem) => {
        const updatedata = [...data, newitem]
        const items = localStorage.getItem("notes");
        if (items) {
            const it = JSON.parse(items);
            console.log(it)
            const at = [...it, ...updatedata];
            localStorage.setItem("notes", JSON.stringify(at));
            
        } else {
            localStorage.setItem("notes", JSON.stringify(updatedata))
        }
        setdata(updatedata);
        
        setittle("");
        setcontent("");
       
        
        }
    
    
    
    
    return (
        <>
            <div >
                <div className="big">Create Notes here</div>
            <form className="form-component" >
    <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={tittle} onChange={(e)=>{setittle(e.target.value)}} placeholder="Enter title" required/>
    </div>
    <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea id="content" value={content} onChange={(e)=>{setcontent(e.target.value)}} placeholder="Enter content" required />
    </div>
    <button onClick={createnote}>Create</button>
                </form>
                </div>
        </>
    )
}
export default Note;