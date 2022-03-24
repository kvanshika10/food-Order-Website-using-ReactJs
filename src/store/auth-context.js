import React from "react"

const AuthContext=React.createContext({
    Items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}

})



export default AuthContext;