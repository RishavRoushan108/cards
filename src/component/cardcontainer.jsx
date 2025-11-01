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
function Cardcontainer(){
    const [list,setlist]=useState(itemlist);
    const deletecart=(id)=>{
        const updatedlist=list.filter((item)=>item.id!=id);
        setlist(updatedlist)
    }
    const [totalcount,settotalcount]=useState(0);
    return (
        <div>
            {list.map((object)=>{
                return <Card 
                           object={object} 
                           key={object.id}
                           deletecart={deletecart}
                           count={count}
                       />
                })}
        </div>
    )
}

export default Cardcontainer