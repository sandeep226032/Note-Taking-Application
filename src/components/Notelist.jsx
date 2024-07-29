import { useEffect, useState } from "react";
import Pagination from "./Pagination.jsx";
import "./list.css"

function Notelist({ notes ,remove,edit}) {
    const itemperpage = 10;
    const [currentpage, setcurrentpage] = useState(1);
    const totalpage = Math.ceil(notes.length / itemperpage);
    const lastindexofitem = currentpage * itemperpage;
    const firstindexofitem = lastindexofitem - itemperpage;
    const currentitems = notes.slice(firstindexofitem, lastindexofitem);
    const handlepagechange = (number) => {
        setcurrentpage(number)
    }
    
    return (
        <>
            {
                currentitems.map((e,index) => {
                    return <div key={index} className="container">
                        <div className="box">
                            <label htmlFor="title">Title</label>
                            <p>{ e.tittle}</p>
    
                        </div>
                        <div className="box">
        <label htmlFor="content">Content</label>
                            <p>{ e.content}</p>
                        </div>
                        <div className="box">
        <label htmlFor="time">Time</label>
                            <p>{ e.time}</p>
                        </div>
                        <div className="butbox">
                            <button className="opbut" onClick={()=>{edit(index)}} >Edit</button>
                            <button  onClick={()=>{remove(index)}} className="opbut">Delete</button>
                        </div>

                    </div>
                    
                })
            }
            
        <div className="page">   
        <Pagination currentpage={currentpage} totalpage={totalpage} onpagechange={handlepagechange}></Pagination>
            </div>    
            
    
        </>
    )
}
export default Notelist;