import { useState } from "react";
import "./Notestyle.css"
function Editpage({ editdata,save }) {
    const [etittle, setetittle] = useState(editdata.tittle);
    const [econtent, setecontent] = useState(editdata.content);
    return (
        <>
            <div className="editform">
    <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={etittle} onChange={(e)=>{setetittle(e.target.value)}} placeholder="Edit title" required/>
    </div>
    <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea id="content"  value={econtent} onChange={(e)=>{setecontent(e.target.value)}} placeholder="Edit content" required />
    </div>
                <button onClick={()=>{save(etittle,econtent)}}>Edit</button>
                </div>
        </>
    )
}
export default Editpage;