import "./page.css"
function Pagination({currentpage,totalpage,onpagechange}) {
    const pagenumbers = [];
    for (let i = 1; i <= totalpage; i++) {
    pagenumbers.push(i);
}
    return (
        <>
            <div>
                <ul className="pagination">
                    {
                        pagenumbers.map(numbers => (
                            <li key={numbers} className={`page-item ${currentpage === numbers ? 'active' : ''}`}>
                                <button onClick={()=>{onpagechange(numbers)}} className="page-link">{ numbers}</button>
                            </li>
                        ))
                    }
                </ul>

            </div>  
        </>
    )
}
export default Pagination;