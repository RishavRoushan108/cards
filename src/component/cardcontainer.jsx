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
function Cardcontainer({settotalCount,settotalprice}){
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
    const [prices,setprices]=useState({});
    const handlepricechange=(id,newprice)=>{
        const updatedprice={...prices,[id]:newprice};
        setprices(updatedprice);
        const totalprice=Object.values(updatedprice).reduce((sum,c)=>sum+c,0);
        settotalprice(totalprice);
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
                           parentprice={prices[object.id]||0}
                           onpricechange={handlepricechange}
                       />
                })}
        </div>
    )
}

export default Cardcontainer