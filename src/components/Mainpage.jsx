import { useEffect, useState } from 'react'
import "./mainpage.css"
import { Link } from "react-router-dom";
import Notelist from "./Notelist.jsx";
import Edit from "./Editpage.jsx";
function Mainpage() {
    const [search, setsearch] = useState("");
    const [notes, setnotes] = useState([]);
    const [editvisible, seteditvisible] = useState(false);
    const [editdata, seteditdata] = useState({});
    const [editindex, seteditindex] = useState(0);
    useEffect(() => {
        const getdata = () => {
            const items = localStorage.getItem("notes");
            if (items) {
                const parseditems = JSON.parse(items);
                
                setnotes(parseditems);
                
            }
        }
        getdata();
    }, [])
    const fill = () => {
        const data = localStorage.getItem("notes");
        if (data) {
            const newdata = JSON.parse(data);
        
            const newnotes = newdata.filter((item) => {
                const str = item.tittle;
                
                if (str.includes(search)) {
                    return item
                }
            })
        
    
            setnotes(newnotes);
        }
         else {
            setnotes(notes)
        }
    }
    const remove = (index) => {
        // console.log(index);
        const items = localStorage.getItem("notes");
        if (items) {
            const parseitems = JSON.parse(items);
            parseitems.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(parseitems));
            setnotes(parseitems);
            
        }
    }
    const edit = (index) => {
        seteditvisible(true);
        const items = localStorage.getItem("notes");
        if (items) {
            const elements = JSON.parse(items);
            const ele = elements[index];
            seteditdata(ele);
            seteditindex(index);
            
        }


    }
    const save = (etittle,econtent) => {
        // console.log(etittle, econtent);
         const items = localStorage.getItem("notes");
        if (items) {
            const elements = JSON.parse(items);
            const ele = elements[editindex];
            ele.tittle = etittle;
            ele.content = econtent;
            const t = new Date();
        const utime = t.getDate() + "-" + t.getMonth() + "-" + t.getFullYear() + " " + t.getHours() + ":" + t.getMinutes();
            ele.time = utime;
            localStorage.setItem("notes", JSON.stringify(elements));
            const res = localStorage.getItem("notes");
            if (res) {
                const res2 = JSON.parse(res);
                setnotes(res2);
            }
        }
        seteditvisible(false);
    }
return (
        <>
            
    <div >
    <div className='head'>
        Note Taking Application
    </div>
    <div className="search-bar">
    <input
        type="text" value={search} onChange={(e)=>{setsearch(e.target.value)}} placeholder="Search by Tittle..."/>
    <button className='but1' onClick={fill} >Search</button>
    </div>
    <div className='create'>
    <Link to="/create"><button className='but1'  >Create Note</button></Link>
        </div>
        <div className='editstyle'>
{editvisible && <Edit editdata={editdata} save={save}></Edit>}
        </div>
    <Notelist  notes={notes} remove={remove}  edit={edit} ></Notelist>
    


    </div>

    </>
        
    )
}
export default Mainpage;