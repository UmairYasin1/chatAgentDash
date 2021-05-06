import React, { createContext ,useState} from 'react';


export const MinimizeContext = createContext();



// const miniReducer = (visits,minimizeUser,action)=>{
//     switch (action.type){

//         case  'onlyAllowOneTime' :
//             console.log("minimize array" ,minimizeUser ,"actionnn",action.payload)
//             let ind =visits.findIndex(x => x.visitor_id === action.payload)
//             if (~ind)
//             minimizeUser[ind] = action.payload ;
//             else
//             minimizeUser.push(action.payload)
//             return [...minimizeUser]

//         default:

//                 throw new Error();
//     }

// }





export const MinimizeProvider = (props) =>{
//    const [visits] = useContext(UserList)
    const [minimizeUser,setMinimizeUser] = useState([])
   
    return(
        <MinimizeContext.Provider value={[minimizeUser,setMinimizeUser]}>
         {props.children}
        </MinimizeContext.Provider>
    )
}