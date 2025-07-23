"use client"
import react, { useContext,createContext,useReducer } from "react";


type student={
    name:string;
    age:string;
    email:string
}

type records={
   students:student[]
}


type actionType={type:"add-task";payload:student} |{type:"delete-task";payload:number}|{type:"update";payload:student;index:number}

type contextType={
    state:records;
    dispatch:react.Dispatch<actionType>
}

const initialState:records={students:[]}

const reducer=(state:records,action:actionType):records=>{
   
   switch(action.type){
      case'add-task': return {students:[...state.students ,action.payload]}
      case 'delete-task': const updated=state.students.filter((_,idx)=>idx!==action.payload);
                           return {students:updated}
      case'update':  const updatedStudentData=action.payload;
                     const targetIndex=action.index;
                     return {students:[...state.students,updatedStudentData]}
                        
                     
      default:return state;
   }
}

const DataContext=createContext({} as contextType)

export const useData=()=>{
    return useContext(DataContext);
}




const DataProvider=({children}:{children:react.ReactNode})=>{
    const[state,dispatch]=useReducer(reducer,initialState);
    console.log(state);
    
    
    return(
        <>
           <DataContext value={{state,dispatch}}>
                {children}
           </DataContext>
        </>
    )
}

export default DataProvider;