import { useState } from "react"
import Card from "./card"
const itemlist=[{
    id:1,
    title:"pen",
    description:"used to write",
    price:5,
    img:"https://cdn-icons-png.flaticon.com/128/483/483921.png"
},
{
    id:2,
    title:"pencile",
    description:"used to write but can be erased",
    price:3,
    img:"https://cdn-icons-png.flaticon.com/128/227/227104.png"
},
{
    id:3,
    title:"eraser",
    description:"used to remove written by pencile",
    price:2,
    img:"https://cdn-icons-png.flaticon.com/128/2015/2015014.png"
}]
function Cardcontainer({settotalCount}){
    const [list,setlist]=useState(itemlist);
    const [counts,setCounts]=useState({});
    const deletecart=(id)=>{
        const updatedlist=list.filter((item)=>item.id!=id);
        setlist(updatedlist)
    }
    const handlecountchange=(id,newcount)=>{
        const updatedcounts={...counts,[id]:newcount};
        setCounts(updatedcounts);
        const totalcount= Object.values(updatedcounts).reduce((sum,c)=>sum+c,0);
        settotalCount(totalcount)
    }
    return (
        <div>
            {list.map((object)=>{
                return <Card 
                           object={object} 
                           key={object.id}
                           deletecart={deletecart}
                           parentcount={counts[object.id]||0}
                           oncountchange={handlecountchange}
                       />
                })}
        </div>
    )
}

export default Cardcontainer