import React,{useState,createContext} from 'react'


export const MessageCounter = createContext()

// export const Counter = (props) =>{
//     const [count , setCount] = useState(0)
//     return (
//         <MessageCounter.Provider value={[count,setCount]}>
//             {props.children}
//         </MessageCounter.Provider>
//     )
// }