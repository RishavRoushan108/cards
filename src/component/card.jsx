import './Style.css'
import { useState } from 'react';
function Card(props,{count}){
    const {title,description,img,price,id}=props.object
    const {deletecart}=props;
    const [count,setCount] =useState(0);
    return (
        <div className="whole">
            <div className="left">
                <img src={img} alt="not found" />
            </div>
            <div className="right">
                <div className="content">
                    <div className='title'>
                        <h2>{title}</h2>
                        <h3>{description}</h3>
                    </div>
                    <div className='price'>
                        <h3>price:{price} Rs</h3>
                        <h3>qty:{count}</h3>
                        <h3>total:{price*count}</h3>
                    </div>
                </div>
                <div className="button">
                    <button onClick={()=>{setCount(count+1)}}>add</button>
                    <button onClick={()=>{setCount(prevcount=>prevcount==0? 0:prevcount-1)}}>sub</button>
                    <button onClick={()=>{deletecart(id)}}>delete</button>
                </div>
            </div>
        </div>
    )
}



export default Card;