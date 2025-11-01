function Header(){
    const style={
        Image:{
            height:"100px",
            width:"100px",
            borderRadius:60
        },
        Cart:{
            height:"50px",
            width:"50px"
        },
        Count:{
            height:"20px",
            width:"20px",
            backgroundColor:"yellow",
            borderRadius:"50%",
            marginLeft:"40px"
        },
        border:"2px black solid",
        height:"120px",
        width:"100%",
        display:"flex",
        justifyContent:"space-around",
        alignItems: 'center'
    }
    return (
        <div style={style}>
            <img style={style.Image} src="https://cdn-icons-png.flaticon.com/128/17512/17512129.png" alt="not found" />
            <h1>slipkart</h1>
            <div>
                <img style={style.Cart}  src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png" alt="not found" />
                <div style={style.Count}></div>
            </div>
        </div>
    )
}

export default Header